import { useEffect, useState } from "react";

const useSemiPersistentState = (key, initialState) => {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem(key);
    if (savedState) {
      return JSON.parse(savedState);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useSemiPersistentState;
