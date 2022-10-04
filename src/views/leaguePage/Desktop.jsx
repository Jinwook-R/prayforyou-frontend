import React from "react";
import {
  StyledDesktopWrapper,
  StyledMainContentWrapper,
} from "../../components";
import { Table } from "../../components/table";
import { User, Toggle } from "../../components/common";
import { TablePageTitleWrapper } from "../../components/wrapper";
import { format, isDate } from "date-fns";

const Desktop = ({
  leagueTitle,
  leagueType,
  includingCount,
  clanData,
  //managerTableProps,
  //mapTableProps,
  isFavorite,
  onClickFavorite,
}) => {
  const clanTableProps = {
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
    data: [...clanData].map((item, index) => ({
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
              {leagueTitle}
            </div>
          </div>
          <div style={{ height: "29px", fontSize: "20px" }}>
            {`${leagueType === "public" ? "공식" : "개인"}`}
          </div>
          <div style={{ height: "29px", fontSize: "20px" }}>
            {`${includingCount}개의 클랜 참여중`}
          </div>
        </TablePageTitleWrapper>
        {/* TODO: 추후 연동 <Table
          bodyStyle={{ width: "100%" }}
          headerStyle={{ width: "100%", paddingInline: "56px" }}
          rowStyler={() => {
            return {
              paddingInline: "56px",
              height: "60px",
            };
          }}
          {...managerTableProps}
        /> */}
        {/* TODO: 추후 연동 <Table
          bodyStyle={{ width: "100%" }}
          headerStyle={{ width: "100%", paddingInline: "56px" }}
          rowStyler={() => {
            return {
              paddingInline: "56px",
              height: "60px",
            };
          }}
          {...mapTableProps}
        />*/}
        <Table
          headerStyle={{ paddingInline: "56px" }}
          rowStyler={() => {
            return {
              paddingInline: "56px",
            };
          }}
          {...clanTableProps}
        />
      </StyledMainContentWrapper>
    </StyledDesktopWrapper>
  );
};

export default Desktop;
