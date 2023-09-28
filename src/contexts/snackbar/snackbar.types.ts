import type { MessageType } from "@/shared/types";

export type SnackbarArgs = {
  type: MessageType;
  message: string;
  durationInSeconds?: number;
};
