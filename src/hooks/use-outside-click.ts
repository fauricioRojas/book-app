import { useEffect } from "react";

interface Props {
  ref: any;
  callback: (event: Event) => void;
}
export const useOutsideClick = ({ ref, callback }: Props) => {
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
