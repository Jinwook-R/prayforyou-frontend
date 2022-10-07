import React, { useEffect, useMemo } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getPrivateRankings } from "../../redux/private";
import { useInfinite } from "../../hooks";
import { resetStore } from "../../redux/store";

const PrivatePage = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  const dispatch = useDispatch();
  const { data, status } = useSelector((store) => store.privateRankingList);
  const { content, isLast } = data;

  const { loadNextPage, slicedData, pageCount } = useInfinite({
    data: content,
    isSuccess: status === "succeeded",
    isAsync: true,
  });

  useEffect(() => {
    dispatch(getPrivateRankings({ page: pageCount }));
    return () => {
      dispatch(resetStore());
    };
  }, [dispatch, pageCount]);

  const addedRankData = useMemo(() => {
    return slicedData.map((item, index) => {
      return { ...item, rank: index + 1 };
    });
  }, [slicedData]);
  return isMobile ? (
    <Mobile
      userInfoList={addedRankData}
      isEnd={isLast}
      onClickMoreButton={loadNextPage}
    />
  ) : (
    <Desktop
      userInfoList={addedRankData}
      isEnd={isLast}
      onClickMoreButton={loadNextPage}
    />
  );
};

export default PrivatePage;
