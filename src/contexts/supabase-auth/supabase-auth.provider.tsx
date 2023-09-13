"use client";

import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, useEffect, useState } from "react";

import { SupabaseAuthContext } from ".";
import { AuthSession, User } from "@supabase/supabase-js";
import { useSupabase } from "..";

interface ISupabaseAuthProviderProps extends PropsWithChildren {
  serverSession?: AuthSession | null;
}

export const SupabaseAuthProvider: FC<ISupabaseAuthProviderProps> = ({
  serverSession,
  children,
}) => {
  const { supabaseClient } = useSupabase();
  const router = useRouter();
  const [user, setUser] = useState<User | undefined>(undefined);

  const signOut = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      return error.message;
    }
    router.push('/login');
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
    router.push('/');
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
      signInWithGithub,
      signInWithEmail,
    }}>
      {children}
    </SupabaseAuthContext.Provider>
  )
};
