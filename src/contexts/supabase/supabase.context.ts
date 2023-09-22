"use client";

import { createContext, useContext } from "react";
import { type SupabaseClient } from "@supabase/auth-helpers-nextjs";

interface ISubabaseContext {
  supabaseClient: SupabaseClient;
}

export const SupabaseContext = createContext<ISubabaseContext>({
  supabaseClient: {} as SupabaseClient,
});

export const useSupabase = () => {
  const context = useContext(SupabaseContext);

  if (!context) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }

  return context;
};
