import { ReactNode } from "react";

import type { MessageType } from "@/shared/types";

export type SnackbarArgs = {
  type: MessageType;
  body: ReactNode;
  durationInSeconds?: number;
};
