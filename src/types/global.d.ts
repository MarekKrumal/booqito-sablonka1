interface ScczWidget {
  init: () => void;
}

declare global {
  interface Window {
    sccz_widget: ScczWidget;
  }
}
