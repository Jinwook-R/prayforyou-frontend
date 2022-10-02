import React, { useState } from "react";
import {
  StyledDesktopWrapper,
  StyledMainContentWrapper,
} from "../../components";
import { Table } from "../../components/table";
import sampleImg from "../../assets/clan_logo_sample_1.png";
import { User, Toggle } from "../../components/common";
import { TablePageTitleWrapper } from "../../components/wrapper";
import { format, isDate } from "date-fns";

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

const Desktop = () => {
  //TODO : connect 'favorite' Update Api
  const [isFavorite, setIsFavorite] = useState(leaguePageMockData.isFavorite);

  const mockManagerTableProps = {
    cellConfigs: [
      {
        name: "리그 관리자",
        key: "managerName",
      },
    ],
    data: [...leaguePageMockData.includingManagers],
  };
  const mockMapTableProps = {
    cellConfigs: [
      {
        name: "리그 맵",
        key: "mapName",
      },
    ],
    data: [...leaguePageMockData.includingMaps],
  };

  const mockClanTableProps = {
    cellConfigs: [
      {
        name: "참여중인 클랜",
        style: { flex: 1, minWidth: "430px" },
        renderer: (clan) => {
          return <User thumbnail={clan.thumbnail} name={clan.clanName} />;
        },
      },
      {
        name: "",
        width: "200px",
        renderer: ({ leagueType }) => {
          return `${leagueType === "first" ? 1 : 2}부리그`;
        },
      },
      {
        name: "",
        width: "200px",
        renderer: ({ winCount }) => {
          return `${winCount}승`;
        },
      },
      {
        name: "",
        width: "200px",
        renderer: ({ loseCount }) => {
          return `${loseCount}패`;
        },
      },
      {
        name: "",
        width: "200px",
        renderer: ({ winCount, loseCount }) => {
          return `${(winCount / (winCount + loseCount)).toFixed(1)}%`;
        },
      },
      {
        name: "",
        width: "200px",
        renderer: ({ ladderPoint }) => {
          return `${ladderPoint}점`;
        },
      },
      {
        name: "",
        width: "200px",
        renderer: ({ createdDate }) => {
          if (isDate(createdDate)) {
            return `${format(createdDate, "yyyy.MM.dd")} 가입`;
          } else {
            return "";
          }
        },
      },
    ],
    data: [...leaguePageMockData.includingClans].map((item, index) => ({
      ...item,
      rank: index + 1,
    })),
  };
  return (
    <StyledDesktopWrapper>
      <StyledMainContentWrapper>
        <TablePageTitleWrapper>
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: "59px",
                fontSize: "40px",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              {leaguePageMockData.leagueTitle}
            </div>
            <div style={{ display: "inline-block", marginLeft: "50px" }}>
              <Toggle
                toggled={isFavorite}
                onClick={() => setIsFavorite((prevState) => !prevState)}
              />
            </div>
          </div>
          <div style={{ height: "29px", fontSize: "20px" }}>
            {`${leaguePageMockData.leagueType === "public" ? "공식" : "개인"}`}
          </div>
          <div style={{ height: "29px", fontSize: "20px" }}>
            {`${leaguePageMockData.includingCount}개의 클랜 참여중`}
          </div>
        </TablePageTitleWrapper>
        <Table
          bodyStyle={{ width: "100%" }}
          headerStyle={{ width: "100%", paddingInline: "56px" }}
          rowStyler={() => {
            return {
              paddingInline: "56px",
              height: "60px",
            };
          }}
          {...mockManagerTableProps}
        />
        <Table
          bodyStyle={{ width: "100%" }}
          headerStyle={{ width: "100%", paddingInline: "56px" }}
          rowStyler={() => {
            return {
              paddingInline: "56px",
              height: "60px",
            };
          }}
          {...mockMapTableProps}
        />
        <Table
          headerStyle={{ paddingInline: "56px" }}
          rowStyler={() => {
            return {
              paddingInline: "56px",
            };
          }}
          {...mockClanTableProps}
        />
      </StyledMainContentWrapper>
    </StyledDesktopWrapper>
  );
};

export default Desktop;
