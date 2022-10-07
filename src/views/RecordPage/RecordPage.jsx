import React, { useEffect, useState } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserInfo } from "../../redux/user/userInfoSlice";
import { getUserRecords } from "../../redux/record";
import { useInfinite } from "../../hooks";
import { resetStore } from "../../redux/store";

const RecordPage = () => {
  const { userNexonId } = useParams();

  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  const dispatch = useDispatch();
  const { info } = useSelector((store) => store.userInfo);
  const { content, status, isEnd } = useSelector((store) => store.userRecords);

  const { loadNextPage, slicedData, pageCount } = useInfinite({
    data: content,
    isSuccess: status === "succeeded",
    isAsync: true,
  });

  useEffect(() => {
    if (userNexonId !== undefined) {
      dispatch(getUserInfo({ userNexonId }));
    }
    return () => {
      dispatch(resetStore());
    };
  }, [dispatch, userNexonId]);

  useEffect(() => {
    dispatch(getUserRecords({ userNexonId, page: pageCount }));
  }, [pageCount, dispatch, userNexonId]);

  return isMobile ? (
    <Mobile
      userInfo={{ ...info, userNexonId: userNexonId }}
      matches={slicedData}
      isEnd={isEnd}
      onClickMoreButton={loadNextPage}
    />
  ) : (
    <Desktop
      userInfo={{ ...info, userNexonId: userNexonId }}
      matches={slicedData}
      isEnd={isEnd}
    />
  );
};

export default RecordPage;
