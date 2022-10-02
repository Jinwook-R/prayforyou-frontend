import React, { useState } from "react";
import Desktop from "./Desktop";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import Mobile from "./Mobile";
import sampleImg from "../../assets/clan_logo_sample_1.png";

const clanListItemMockData = {
  clanName: "토끼토끼 클랜",
  thumbnail: sampleImg, //img url
  leagueType: "first",
  winCount: 2124,
  loseCount: 124,
  createdDate: new Date(),
  ladderPoint: 1235,
  //rate = winCount / (winCount + loseCount)
};

const mapListMockData = {
  mapName: "제3보급창고",
  mapId: 123512,
};

const managerMockData = {
  managerName: "김순경",
};

const leaguePageMockData = {
  leagueTitle: "P4U 공식리그",
  leagueType: "public", //public or private
  isFavorite: false,
  includingCount: 46,
  includingManagers: Array.from({ length: 1 }, () => {
    return { ...managerMockData };
  }),
  includingMaps: Array.from({ length: 2 }, () => {
    return { ...mapListMockData };
  }),
  includingClans: Array.from({ length: 30 }, () => {
    return { ...clanListItemMockData };
  }),
};

const LeaguePage = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });
  //TODO : connect 'favorite' Update Api
  const [isFavorite, setIsFavorite] = useState(leaguePageMockData.isFavorite);

  const mockManagerTableProps = {
    cellConfigs: [
      {
        name: "리그 관리자",
        key: "managerName",
        style: { fontSize: isMobile ? "15px" : "20px" },
      },
    ],
    data: [...leaguePageMockData.includingManagers],
  };
  const mockMapTableProps = {
    cellConfigs: [
      {
        name: "리그 맵",
        key: "mapName",
        style: { fontSize: isMobile ? "15px" : "20px" },
      },
    ],
    data: [...leaguePageMockData.includingMaps],
  };

  const favoriteClickHandler = () => setIsFavorite((prevState) => !prevState);
  return isMobile ? (
    <Mobile
      leagueTitle={leaguePageMockData.leagueTitle}
      leagueType={leaguePageMockData.leagueType}
      includingCount={leaguePageMockData.includingCount}
      clanData={leaguePageMockData.includingClans}
      managerTableProps={mockManagerTableProps}
      mapTableProps={mockMapTableProps}
      isFavorite={isFavorite}
      onClickFavorite={favoriteClickHandler}
    />
  ) : (
    <Desktop
      leagueTitle={leaguePageMockData.leagueTitle}
      leagueType={leaguePageMockData.leagueType}
      includingCount={leaguePageMockData.includingCount}
      clanData={leaguePageMockData.includingClans}
      managerTableProps={mockManagerTableProps}
      mapTableProps={mockMapTableProps}
      isFavorite={isFavorite}
      onClickFavorite={favoriteClickHandler}
    />
  );
};

export default LeaguePage;
