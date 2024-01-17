export const debounce = (func: Function, timeout: number = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}