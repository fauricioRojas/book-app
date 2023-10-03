'use client';

import type { User } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';

type TSubabaseAuthContext = {
  user?: User;
  signOut: () => Promise<string | null>;
  signUp: (email: string, password: string) => Promise<string | null>;
  signInWithGithub: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<string | null>;
};

export const SupabaseAuthContext = createContext<TSubabaseAuthContext>({
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
    throw new Error('useSupabaseAuth must be used inside SupabaseAuthProvider');
  }

  return context;
};
