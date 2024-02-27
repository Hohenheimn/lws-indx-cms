import { useEffect, useState } from "react";


// type T automatic typescript know what the type
export const useDebounce = <T>(value: T, delay = 500) => {
  const [deboundValue, setDebounceValue] = useState<T>(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return deboundValue;
};
