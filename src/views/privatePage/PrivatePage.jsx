import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import sampleImg from "../../assets/clan_logo_sample_1.png";

const samplePrivateItemData = {
  id: 1235123,
  rank: 1,
  thumbnail: sampleImg,
  nickname: "김토끼",
  winCount: 132,
  loseCount: 82,
  rate: 11.1, // winCount / (winCount+loseCount),
  killDeathRate: 11.1,
  killAverage: 8.8,
  ladderPoint: 1111,
};

const privatePageMockData = {
  infoList: Array.from({ length: 30 }, (_, index) => {
    return { ...samplePrivateItemData };
  }),
};

const PrivatePage = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });
  return isMobile ? (
    <Mobile userInfoList={privatePageMockData.infoList} />
  ) : (
    <Desktop userInfoList={privatePageMockData.infoList} />
  );
};

export default PrivatePage;
