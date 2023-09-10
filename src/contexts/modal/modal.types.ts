export interface IConfirmationModalArgs {
  title: string;
  buttonText: string;
  onClick: () => Promise<void>;
}
