"use client";

import { useEffect, useState, Dispatch, SetStateAction } from "react";

const PREFIX = "book-app-";

const isClient = typeof window !== "undefined";

export function useLocalStorage<S>(
  key: string,
  defaultValue?: S
): [S, Dispatch<SetStateAction<S>>] {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    try {
      const jsonValue = isClient ? localStorage.getItem(prefixedKey) : null;

      return jsonValue === null ? defaultValue : JSON.parse(jsonValue);
    } catch (error) {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(prefixedKey, JSON.stringify(value));
    }
  }, [prefixedKey, value]);

  return [value, setValue];
}
