import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';

import { getNextDateIn } from "@/shared/utils";
import { SELECT, TABLES, TProcedure } from '@/supabase';
import { RemindersHeader } from "./reminders-header";
import { RemindersList } from "./reminders-list";

export const revalidate = 0;

const abortController = new AbortController();
const today = getNextDateIn();
const todayIn15 = getNextDateIn(15);

const RemindersPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data: procedures } = await supabase
    .from(TABLES.PROCEDURES)
    .select<string, TProcedure>(SELECT.PROCEDURE_REMINDER)
    .gt('nextDate', today)
    .lt('nextDate', todayIn15)
    .abortSignal(abortController.signal);
  
  return (
    <main>
      <RemindersHeader />
      <RemindersList serverProcedures={procedures ?? []} />
    </main>
  );
};

export default RemindersPage;
