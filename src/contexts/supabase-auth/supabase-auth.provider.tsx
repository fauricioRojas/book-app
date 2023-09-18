"use client";

import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, useEffect, useState } from "react";

import { AuthSession, User } from "@supabase/supabase-js";
import { ROUTES } from "@/shared/constants";
import { SupabaseAuthContext } from ".";
import { useSnackbar, useSupabase } from "..";

interface ISupabaseAuthProviderProps extends PropsWithChildren {
  serverSession?: AuthSession | null;
}

export const SupabaseAuthProvider: FC<ISupabaseAuthProviderProps> = ({
  serverSession,
  children,
}) => {
  const { supabaseClient } = useSupabase();
  const { showSnackbar } = useSnackbar();
  const router = useRouter();
  const [user, setUser] = useState<User | undefined>(undefined);

  const signOut = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      return error.message;
    }
    router.push(ROUTES.SIGN_IN);
    return null;
  };

  const signInWithGithub = async () => {
    await supabaseClient.auth.signInWithOAuth({ provider: 'github' });
  };

  const signInWithEmail = async (email: string, password: string) => {
    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return error.message;
    }
    router.push(ROUTES.REMINDERS);
    return null;
  };

  const signUp = async (email: string, password: string) => {
    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      // options: {
      //   emailRedirectTo: window.location.origin,
      // },
    });

    if (error) {
      return error.message;
    }

    return null;
  };

  // Refresh the Page to Sync Server and Client
  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((event, session) => {
      
      if (session?.access_token !== serverSession?.access_token) {
        router.refresh();
      } else {
        setUser(session?.user);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabaseClient, router, serverSession?.access_token]);

  return (
    <SupabaseAuthContext.Provider value={{
      user,
      signOut,
      signUp,
      signInWithGithub,
      signInWithEmail,
    }}>
      {children}
    </SupabaseAuthContext.Provider>
  )
};
