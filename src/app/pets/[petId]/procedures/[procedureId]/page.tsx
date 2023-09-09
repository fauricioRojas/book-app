import { notFound } from "next/navigation";
import { FC } from "react";

import { IProcedure, PROCEDURES_TABLE, supabaseClient } from "@/supabase";
import { ProcedureDetails } from "./procedure-details";

const abortController = new AbortController();

interface IProcedureProps {
  params: {
    procedureId: string;
  };
}

const Procedure: FC<IProcedureProps> = async ({ params: { procedureId } }) => {
  const { data: procedure } = await supabaseClient
    .from(PROCEDURES_TABLE)
    .select<string, IProcedure>(`
      id,
      notes (
        id,
        type,
        date,
        description,
        photo
      ),
      pets (
        id
      ),
      cost,
      weight,
      nextDate
    `).match({ id: procedureId })
    .abortSignal(abortController.signal)
    .single();

  if (!procedure) {
    notFound();
  }

  return (
    <main>
      <ProcedureDetails {...procedure} />
    </main>
  );
};

export default Procedure;
