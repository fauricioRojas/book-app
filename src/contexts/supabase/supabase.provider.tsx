"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FC, PropsWithChildren, useState } from "react";

import { SupabaseContext } from ".";

export const SupabaseProvider: FC<PropsWithChildren> = ({ children }) => {
  const [supabaseClient] = useState(() => createClientComponentClient());

  return (
    <SupabaseContext.Provider value={{ supabaseClient }}>
      {children}
    </SupabaseContext.Provider>
  )
};
