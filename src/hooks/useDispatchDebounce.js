import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const useDispatchDebounce = (fn, ms, inititalValue) => {
  const timeoutId = useRef(null);
  const callback = useRef(fn);
  const dispatch = useDispatch();
  const [value, setValue] = useState(inititalValue);
  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback((...args) => {
    timeoutId.current && clearTimeout(timeoutId);
    setTimeout(async () => {
      const dispatchResponse = await dispatch(callback.current(...args));
      setValue(dispatchResponse.payload);
      return dispatchResponse.payload;
    }, ms);
  });

  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    return () => {
      timeoutId.current && clearTimeout(timeoutId);
    };
  }, []);

  return [run, clear, value];
};

export default useDispatchDebounce;
