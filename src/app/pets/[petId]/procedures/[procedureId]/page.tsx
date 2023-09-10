import { notFound } from "next/navigation";
import { FC } from "react";

import { IProcedure, SELECT, TABLES, supabaseClient } from "@/supabase";
import { Procedure } from "./procedure";

const abortController = new AbortController();

interface IProcedurePageProps {
  params: {
    procedureId: string;
  };
}

const ProcedurePage: FC<IProcedurePageProps> = async ({ params: { procedureId } }) => {
  const { data: procedure } = await supabaseClient
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
