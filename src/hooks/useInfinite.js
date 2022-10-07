import { useCallback, useEffect, useMemo, useState } from "react";

const useInfinite = ({
  pageUnit = 8,
  data = [],
  isSuccess = true,
  isAsync = false,
}) => {
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

  const clear = useCallback(() => {
    setPageCount(0);
    setSlicedData([]);
  }, []);
  useMemo(() => {
    return slicedData;
  }, [slicedData]);
  return {
    pageCount,
    loadNextPage,
    slicedData,
    clear,
    isEnd: slicedData.length >= data.length,
  };
};

export default useInfinite;
