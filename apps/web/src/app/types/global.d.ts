export {};

declare global {
  interface Window {
    toggleDevtools?: (status?: boolean) => void;
  }
}
