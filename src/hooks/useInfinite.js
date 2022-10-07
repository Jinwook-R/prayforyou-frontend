import { useCallback, useEffect, useMemo, useState } from "react";

const useInfinite = ({
  pageUnit = 8,
  data = [],
  isSuccess = true,
  isAsync = false,
}) => {
  const isEnd = false;
  const [pageCount, setPageCount] = useState(0);
  const [slicedData, setSlicedData] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setSlicedData((prevState) => [...prevState, ...data]);
    }
  }, [isSuccess]);

  const sliceData = useCallback(() => {
    const sliceCount = (pageCount + 1) * pageUnit;
    const parsed = data.length < sliceCount ? data.length : sliceCount;
    return (data || []).slice(0, parsed);
  }, [pageCount, pageUnit, data]);

  const loadNextPage = useCallback(() => {
    setPageCount((prevState) => prevState + 1);
    if (!isAsync) {
      setSlicedData(sliceData());
    }
  }, [isAsync, sliceData]);
  useMemo(() => {
    return slicedData;
  }, [slicedData]);
  return { isEnd, pageCount, loadNextPage, slicedData };
};

export default useInfinite;
