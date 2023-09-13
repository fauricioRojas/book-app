import { cookies } from 'next/headers';
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { FC } from "react";

import { IProcedure, SELECT, TABLES } from "@/supabase";
import { Procedure } from "./procedure";

const abortController = new AbortController();

interface IProcedurePageProps {
  params: {
    procedureId: string;
  };
}

const ProcedurePage: FC<IProcedurePageProps> = async ({ params: { procedureId } }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data: procedure } = await supabase
    .from(TABLES.PROCEDURES)
    .select<string, IProcedure>(SELECT.FULL_PROCEDURE)
    .match({ id: procedureId })
    .abortSignal(abortController.signal)
    .single();

  if (!procedure) {
    notFound();
  }

  return (
    <main>
      <Procedure serverProcedure={procedure} />
    </main>
  );
};

export default ProcedurePage;
