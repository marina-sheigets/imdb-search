import { useEffect, useState } from "react";

function useDebounce(value: string, delay=500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
      const timeouth = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      
      return () => {
        clearTimeout(timeouth);
      };
    }, [value, delay]);
    
  return debouncedValue;
}

export default useDebounce;