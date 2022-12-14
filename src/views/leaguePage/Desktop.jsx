import React from "react";
import {
  StyledDesktopWrapper,
  StyledMainContentWrapper,
} from "../../components";
import { Table } from "../../components/table";
import { User } from "../../components/common";
import { TablePageTitleWrapper } from "../../components/wrapper";
import { format, isDate } from "date-fns";
import { useNavigate } from "react-router-dom";

const Desktop = ({
  leagueTitle,
  leagueType,
  clanData,
  //managerTableProps,
  //mapTableProps,
  isFavorite,
  onClickFavorite,
}) => {
  const navigate = useNavigate();
  const clanTableProps = {
    cellConfigs: [
      {
        name: "참여중인 클랜",
        style: { flex: 5, width: "430px" },
        renderer: (clan) => {
          return (
            <User
              thumbnail={clan.clanMarkUrl}
              name={clan.clanName}
              onClick={() => {
                navigate(`/clan/${clan.clanId}`);
              }}
            />
          );
        },
      },
      {
        name: "",
        style: { flex: 2, width: "430px" },
        renderer: ({ clanLevel }) => {
          return clanLevel;
        },
      },
      {
        name: "",
        style: { flex: 2, width: "200px" },
        renderer: ({ winCount }) => {
          return `${winCount}승`;
        },
      },
      {
        name: "",
        style: { flex: 2, width: "200px" },
        renderer: ({ loseCount }) => {
          return `${loseCount}패`;
        },
      },
      {
        name: "",
        style: { flex: 2, width: "200px" },
        renderer: ({ winLosePercent }) => {
          return `${winLosePercent.toFixed(1)}%`;
        },
      },
      {
        name: "",
        style: { flex: 2, width: "200px" },
        renderer: ({ score }) => {
          return `${score}점`;
        },
      },
      {
        name: "",
        style: { flex: 2, width: "200px" },
        renderer: ({ createdAt }) => {
          const date = new Date(createdAt);
          if (isDate(date)) {
            return `${format(date, "yyyy.MM.dd")} 가입`;
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
                marginBottom: "20px",
                display: "inline-block",
              }}
            >
              {leagueTitle}
            </div>
          </div>
          <div style={{ height: "29px", fontSize: "20px" }}>
            {`${clanData.length}개의 클랜 참여중`}
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
