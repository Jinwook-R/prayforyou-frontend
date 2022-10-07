import React, { useCallback, useEffect, useState } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import sampleImg from "../../assets/clan_logo_sample_1.png";
import { useDispatch, useSelector } from "react-redux";
import { getClanRankings } from "../../redux/clan";
import { useInfinite } from "../../hooks";
const sampleClanItemData1 = {
  id: 1235123,
  clanId: 191120000005,
  rank: 1,
  clanMarkUrl: sampleImg,
  clanName: "1부 클랜",
  winCount: 132,
  ranking: 1,
  loseCount: 82,
  rate: 11.1, // winCount / (winCount+loseCount),
  score: 1111,
  downDanger: false,
  winLosePercent: 50.0,
};

const sampleClanItemData2 = {
  id: 1235123,
  clanId: 191120000005,
  rank: 1,
  clanMarkUrl: sampleImg,
  clanName: "2부 클랜",
  winCount: 132,
  ranking: 1,
  loseCount: 82,
  rate: 11.1, // winCount / (winCount+loseCount),
  score: 1111,
  downDanger: false,
  winLosePercent: 50.0,
};
/**
 *            "id": 1,
 *            "clanId": 191120000005,
 *            "clanName": "191120",
 *            "winCount": 3,
 *            "loseCount": 3,
 *            "ranking": 0,
 *            "score": 23,
 *            "winLosePercent": 50.0,
 *            "openKakaoLink": null,
 *            "clanMarkUrl": null,
 *            "createdAt": null,
 *            "downDanger": false,
 *            "deleted": false
 */

const clanPageMockData = {
  first: Array.from({ length: 30 }, (_, index) => {
    return { ...sampleClanItemData1, downDanger: index % 2 === 0 };
  }),
  second: Array.from({ length: 30 }, (_, index) => {
    return { ...sampleClanItemData2, downDanger: index % 2 !== 0 };
  }),
};
const ClanPage = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });
  //TODO : 필요에 따라, 아래 방식이 아닌 개별 라우트 페이지처리 필요
  const [isFirstView, setIsFirstView] = useState(true); //first or second

  const dispatch = useDispatch();

  const { content, status } = useSelector((store) => store.clanRankingList);
  const { loadNextPage, slicedData, isEnd, clear } = useInfinite({
    data: content,
    isSuccess: status === "succeeded",
    isAsync: true,
  });

  useEffect(() => {
    dispatch(getClanRankings({ levelName: isFirstView ? "A" : "B" }));
    clear();
  }, [dispatch, isFirstView, clear]);

  const linkButtonHandler = useCallback(() => {
    setIsFirstView((prevState) => !prevState);
  }, []);

  return isMobile ? (
    <Mobile
      isFirstView={isFirstView}
      isEnd={isEnd}
      onClickMoreButton={loadNextPage}
      onClickViewChange={linkButtonHandler}
      clanData={slicedData}
    />
  ) : (
    <Desktop
      isFirstView={isFirstView}
      isEnd={isEnd}
      onClickMoreButton={loadNextPage}
      onClickViewChange={linkButtonHandler}
      clanData={slicedData}
    />
  );
};

export default ClanPage;
