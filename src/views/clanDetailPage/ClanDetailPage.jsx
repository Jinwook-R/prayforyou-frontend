import { MatchRecordMockData } from "../../components/listItem/MatchListItem";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getMapPositions } from "../../redux/map";
import { searchBattle } from "../../redux/battle";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

/*
const memberMockData = {
  nickname: "안녕하살법사",
  ladderPoint: 1727,
  kill: 12,
  death: 5,
  weapon: "라이플",
};*/
const mockMatches = Array.from({ length: 15 }, (_, index) => {
  return {
    ...MatchRecordMockData,
    isWin: index % 2 === 0,
  };
});
const ClanDetailPage = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  const dispatch = useDispatch();
  const userBattle = useSelector((state) => state.battle.battle);

  useEffect(() => {
    dispatch(getMapPositions());
    dispatch(searchBattle(1));
  }, [dispatch]);

  return isMobile ? (
    <Mobile userBattle={userBattle} matches={mockMatches} />
  ) : (
    <Desktop userBattle={userBattle} matches={mockMatches} />
  );
};

export default ClanDetailPage;
