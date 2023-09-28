import type { SnackbarArgs } from "./snackbar.types";

class SnackbarService {
  public showSnackbar: (args: SnackbarArgs) => void;

  constructor() {
    this.showSnackbar = () => {};
  }

  public init(showSnackbar: (args: SnackbarArgs) => void) {
    this.showSnackbar = showSnackbar;
  }
}

export const snackbarService = new SnackbarService();
