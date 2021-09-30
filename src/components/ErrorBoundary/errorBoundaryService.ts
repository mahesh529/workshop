export const logError = (error: string): void => {
  if (window?.top?.AH) {
    (window as any).top.AH.frame.AthenaNetError(
      'reference_architecture error text: ' + error,
      'reference_architecture.esp'
    );
  }
};
