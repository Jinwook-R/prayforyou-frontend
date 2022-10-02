import React, { useCallback, useState } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import sampleImg from "../../assets/clan_logo_sample_1.png";
const sampleClanItemData1 = {
  id: 1235123,
  rank: 1,
  thumbnail: sampleImg,
  clanName: "1부 클랜",
  winCount: 132,
  loseCount: 82,
  rate: 11.1, // winCount / (winCount+loseCount),
  ladderPoint: 1111,
};

const sampleClanItemData2 = {
  id: 1235123,
  rank: 1,
  thumbnail: sampleImg,
  clanName: "2부 클랜",
  winCount: 132,
  loseCount: 82,
  rate: 11.1, // winCount / (winCount+loseCount),
  ladderPoint: 1111,
  isLadderDownTarget: false,
};

const clanPageMockData = {
  first: Array.from({ length: 30 }, (_, index) => {
    return { ...sampleClanItemData1, isLadderDownTarget: index % 2 === 0 };
  }),
  second: Array.from({ length: 30 }, (_, index) => {
    return { ...sampleClanItemData2, isLadderDownTarget: index % 2 !== 0 };
  }),
};
const ClanPage = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });
  //TODO : 필요에 따라, 아래 방식이 아닌 개별 라우트 페이지처리 필요
  const [isFirstView, setIsFirstView] = useState(true); //first or second

  const linkButtonHandler = useCallback(() => {
    setIsFirstView((prevState) => !prevState);
  }, []);

  return isMobile ? (
    <Mobile
      isFirstView={isFirstView}
      onClickViewChange={linkButtonHandler}
      clanData={clanPageMockData}
    />
  ) : (
    <Desktop
      isFirstView={isFirstView}
      onClickViewChange={linkButtonHandler}
      clanData={clanPageMockData}
    />
  );
};

export default ClanPage;
