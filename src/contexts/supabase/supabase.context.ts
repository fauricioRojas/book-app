"use client";

import { createContext, useContext } from "react";
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";

type TSubabaseContext = {
  supabaseClient: SupabaseClient;
};

export const SupabaseContext = createContext<TSubabaseContext>({
  supabaseClient: {} as SupabaseClient,
});

export const useSupabase = () => {
  const context = useContext(SupabaseContext);

  if (!context) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }

  return context;
};
