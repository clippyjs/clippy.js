export type Debugger = (text: string, context?: any) => void;
export const getDebugger = (debug: boolean = false): Debugger => {
  const prefix = "CLIPPY EVENT";
  if (!debug) {
    return () => {};
  }
  return (text, context) => {
    console.debug(`${prefix};${text}:`, context);
  };
};
