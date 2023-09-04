import { ReactNode } from "react";

import { MessageType } from "@/shared/types";

export interface ISnackbarArgs {
  type: MessageType;
  body: ReactNode;
  durationInSeconds?: number;
}
