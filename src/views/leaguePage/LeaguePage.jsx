import React, { useEffect, useState } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";

import sampleImg from "../../assets/clan_logo_sample_1.png";
import { useDispatch, useSelector } from "react-redux";
import { getIncludedClans } from "../../redux/clan/includedClansSlice";
import { resetStore } from "../../redux/store";

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

  const dispatch = useDispatch();
  const includedClans = useSelector((store) => store.includedClans);

  useEffect(() => {
    dispatch(getIncludedClans());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetStore());
    };
  }, []);

  return isMobile ? (
    <Mobile
      leagueTitle={"P4U 공식리그"}
      leagueType={"public"}
      clanData={includedClans.content}
      //managerTableProps={mockManagerTableProps}
      //mapTableProps={mockMapTableProps}
    />
  ) : (
    <Desktop
      leagueTitle={"P4U 공식리그"}
      leagueType={"public"}
      clanData={includedClans.content}
      //managerTableProps={mockManagerTableProps}
      //mapTableProps={mockMapTableProps}
    />
  );
};

export default LeaguePage;
