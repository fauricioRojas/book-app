import type { DrawerArgs } from "./drawer.types";

class DrawerService {
  public showDrawer: (args: DrawerArgs) => void;
  public hideDrawer: () => void;

  constructor() {
    this.showDrawer = () => {};
    this.hideDrawer = () => {};
  }

  public init(showDrawer: (args: DrawerArgs) => void, hideDrawer: () => void) {
    this.showDrawer = showDrawer;
    this.hideDrawer = hideDrawer;
  }
}

export const drawerService = new DrawerService();
