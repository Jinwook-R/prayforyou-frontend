import React, { useEffect, useState } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { MatchRecordMockData } from "../../components/listItem/MatchListItem";
import { useParams } from "react-router";
import { getUserInfo } from "../../redux/user/userInfoSlice";
import { getUserRecords } from "../../redux/record";
import { useInfinite } from "../../hooks";
import { getMatchDetail } from "../../redux/record/matchDetailSlice";

export const memberMockData = {
  nickname: "안녕하살법사",
  ladderPoint: 1727,
  kill: 12,
  death: 5,
  weapon: "라이플",
};

export const matchDetailMockData = {
  mapName: "제3보급창고",
  gameProgressTime: "게임시작시각: 2022년 09월 25일 오후 11시 55분",
  isWin: false,
  redTeam: {
    clanName: "토끼토끼",
    members: Array.from({ length: 5 }, (_, index) => {
      return { ...memberMockData };
    }),
  },
  blueTeam: {
    clanName: "토끼토끼",
    members: Array.from({ length: 5 }, (_, index) => {
      return { ...memberMockData };
    }),
  },
};

const mockMatches = Array.from({ length: 15 }, (_, index) => {
  return {
    ...MatchRecordMockData,
    isWin: index % 2 === 0,
  };
});

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
  }, [dispatch, userNexonId]);

  useEffect(() => {
    dispatch(getUserRecords({ userNexonId, page: pageCount }));
  }, [pageCount, dispatch, userNexonId]);

  const [selectedMatch, setSelectedMatch] = useState(null);

  const detailMatch = useSelector((store) => store.matchDetail);

  useEffect(() => {
    if (selectedMatch) {
      dispatch(getMatchDetail({ matchId: selectedMatch.matchId }));
    }
  }, [dispatch, selectedMatch]);

  return isMobile ? (
    <Mobile
      selectedMatch={selectedMatch}
      setSelectedMatch={setSelectedMatch}
      matchDetail={detailMatch}
      userInfo={info}
      matches={slicedData}
      isEnd={isEnd}
      onClickMoreButton={loadNextPage}
    />
  ) : (
    <Desktop
      selectedMatch={selectedMatch}
      setSelectedMatch={setSelectedMatch}
      matchDetail={detailMatch}
      userInfo={info}
      matches={slicedData}
      isEnd={isEnd}
      onClickMoreButton={loadNextPage}
    />
  );
};

export default RecordPage;
