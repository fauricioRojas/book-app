"use client";

import { User } from "@supabase/supabase-js";
import { createContext, useContext } from "react";

interface ISubabaseAuthContext {
  user?: User;
  signOut: () => Promise<string | null>;
  signUp: (email: string, password: string) => Promise<string | null>;
  signInWithGithub: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<string | null>;
}

export const SupabaseAuthContext = createContext<ISubabaseAuthContext>({
  user: undefined,
  signOut: async () => null,
  signUp: async () => null,
  signInWithGithub: async () => {},
  signInWithFacebook: async () => {},
  signInWithEmail: async () => null,
});

export const useSupabaseAuth = () => {
  const context = useContext(SupabaseAuthContext);

  if (!context) {
    throw new Error("useSupabaseAuth must be used inside SupabaseAuthProvider");
  }

  return context;
};
