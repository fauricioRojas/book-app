"use client";

import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { createContext, useContext } from "react";

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
