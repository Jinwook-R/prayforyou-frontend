import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setLocalStorage = (key, newValue) => {
    console.log(key, newValue);
    setValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setLocalStorage];
};

export default useLocalStorage;
