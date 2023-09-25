import { cookies } from 'next/headers';
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { FC } from "react";

import { TProcedure, SELECT, TABLES } from "@/supabase";
import { Procedure } from "./procedure";

const abortController = new AbortController();

type ProcedurePageProps = {
  params: {
    procedureId: string;
  };
}

const ProcedurePage: FC<ProcedurePageProps> = async ({ params: { procedureId } }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data: procedure } = await supabase
    .from(TABLES.PROCEDURES)
    .select<string, TProcedure>(SELECT.FULL_PROCEDURE)
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
