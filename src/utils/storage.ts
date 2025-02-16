import type { TLocalStorageKey } from '@/types';

const getLocalStorageData = <T>(key: TLocalStorageKey, fallback: T) => {
  const json = localStorage.getItem(key);
  return null === json ? fallback : (JSON.parse(json) as T);
};

const setLocalStorageData = <T>(key: TLocalStorageKey, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export { getLocalStorageData, setLocalStorageData };
