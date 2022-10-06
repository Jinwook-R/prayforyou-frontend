import React, { useEffect, useState } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getMapPositions } from "../../redux/map";
import { searchBattle } from "../../redux/battle";
import { MatchRecordMockData } from "../../components/listItem/MatchListItem";
import { useParams } from "react-router";
import { getUserInfo } from "../../redux/user/userInfoSlice";

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
  const userBattle = useSelector((state) => state.battle.battle);
  const userInfo = useSelector((store) => store.userInfo);

  console.log("유저 인포?", userInfo);

  useEffect(() => {
    dispatch(getMapPositions());
    dispatch(searchBattle(1));
    dispatch(getUserInfo(userNexonId));
  }, [dispatch, userNexonId]);

  return isMobile ? (
    <Mobile userBattle={userBattle} matches={mockMatches} />
  ) : (
    <Desktop userBattle={userBattle} matches={mockMatches} />
  );
};

export default RecordPage;
