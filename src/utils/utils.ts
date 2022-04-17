export const saveToLocalStorage = (data: object[]) =>
    localStorage.setItem('state', JSON.stringify(data));

export const loadFromLocalStorage = () => {
  const stateFromLocalStorage: string | null = localStorage.getItem('state');

  return stateFromLocalStorage
      ? JSON.parse(stateFromLocalStorage)
      : [];
};

export const generateId = () => Math.random()
    .toString()
    .slice(2);