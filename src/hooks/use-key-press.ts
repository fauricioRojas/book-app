"use client";

import { useEffect } from "react";

type Key =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "Backspace"
  | "Enter"
  | "Escape"
  | "Tab";

type UseKeyPressProps = {
  key: Key;
  callback: () => void;
};

export const useKeyPress = ({ key, callback }: UseKeyPressProps) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === key) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
