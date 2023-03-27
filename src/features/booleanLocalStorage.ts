export const saveBooleanInLocalStorage = (name: string, state: boolean) =>
  localStorage.setItem(name, JSON.stringify(state));

export const getBooleanFromLocalStorage = (name: string): boolean => {
  const value = localStorage.getItem(name);
  return value !== null ? JSON.parse(value) : false;
};
