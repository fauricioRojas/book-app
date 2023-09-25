import { useEffect } from "react";

type UseOutsideClickProps = {
  ref: any;
  callback: (event: Event) => void;
};

export const useOutsideClick = ({ ref, callback }: UseOutsideClickProps) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
