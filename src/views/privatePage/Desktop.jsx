import React from "react";
import {
  StyledDesktopWrapper,
  StyledMainContentWrapper,
} from "../../components";
import { Table } from "../../components/table";
import { User } from "../../components/common";
import { TablePageTitleWrapper } from "../../components/wrapper";
import { useNavigate } from "react-router-dom";

/** PrivateTableRow
 * @field
 */

const Desktop = ({ userInfoList, isEnd, onClickMoreButton }) => {
  const navigate = useNavigate();
  const userInfoTableProps = {
    cellConfigs: [
      {
        name: "순위",
        key: "rank",
        style: { width: "96px", flex: 2 },
        align: "center",
      },
      {
        name: "닉네임",
        style: {
          width: "430px",
          flex: 5,
        },
        renderer: (info) => {
          {
            /* TODO : export extra component, <User {...userProps} />} */
          }
          return (
            <User
              onClick={() => {
                navigate(`/record/${info.userNexonId}`);
              }}
              thumbnail={info.clanMarkUrl}
              name={info.name}
            />
          );
        },
      },
      {
        name: "승리",
        style: { width: "200px", flex: 2 },
        renderer: (info) => {
          return `${info["winCount"]}승`;
        },
      },
      {
        name: "패배",
        style: { width: "200px", flex: 2 },
        renderer: (info) => {
          return `${info["loseCount"]}패`;
        },
      },
      {
        name: "승률",
        style: { width: "200px", flex: 2 },
        renderer: (info) => {
          return `${info["winLosePercent"].toFixed(1)}%`;
        },
      },
      {
        name: "킬뎃",
        style: { width: "200px", flex: 2 },
        renderer: (info) => {
          return `${info["killDeath"].toFixed(1)}%`;
        },
      },
      {
        name: "평균킬",
        style: { width: "200px", flex: 2 },
        renderer: (info) => {
          return `${info["killPerGame"]}킬`;
        },
      },
      {
        name: "래더",
        style: { width: "200px", flex: 2 },
        renderer: (info) => {
          return `${info["score"]}점`;
        },
      },
    ],
    data: userInfoList || [],
  };
  return (
    <StyledDesktopWrapper>
      <StyledMainContentWrapper>
        <TablePageTitleWrapper>
          <div style={{ height: "59px", fontSize: "40px", fontWeight: "bold" }}>
            개인 랭킹
          </div>
          <div style={{ height: "29px", fontSize: "20px" }}>
            랭킹은 20분마다 갱신되고, 래더 점수 기준으로 순위가 판정됩니다.
          </div>
        </TablePageTitleWrapper>
        <Table
          {...userInfoTableProps}
          onClickMoreButton={onClickMoreButton}
          isEnd={isEnd}
        />
      </StyledMainContentWrapper>
    </StyledDesktopWrapper>
  );
};

export default Desktop;
