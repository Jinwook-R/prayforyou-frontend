import React from "react";
import {
  StyledDesktopWrapper,
  StyledMainContentWrapper,
} from "../../components";
import { Table } from "../../components/table";
import { User } from "../../components/common";
import { TablePageTitleWrapper } from "../../components/wrapper";

/** PrivateTableRow
 * @field
 */

const Desktop = ({ userInfoList }) => {
  const mockTableProps = {
    cellConfigs: [
      {
        name: "순위",
        key: "rank",
        width: "96px",
        align: "center",
      },
      {
        name: "닉네임",
        width: "430px",
        renderer: (info) => {
          {
            /* TODO : export extra component, <User {...userProps} />} */
          }
          return <User thumbnail={info.thumbnail} name={info.nickname} />;
        },
      },
      {
        name: "승리",
        width: "200px",
        renderer: (info) => {
          return `${info["winCount"]}승`;
        },
      },
      {
        name: "패배",
        width: "200px",
        renderer: (info) => {
          return `${info["loseCount"]}승`;
        },
      },
      {
        name: "승률",
        width: "200px",
        renderer: (info) => {
          return `${info["rate"]}%`;
        },
      },
      {
        name: "킬뎃",
        width: "200px",
        renderer: (info) => {
          return `${info["killDeathRate"]}%`;
        },
      },
      {
        name: "평균킬",
        width: "200px",
        renderer: (info) => {
          return `${info["killAverage"]}킬`;
        },
      },
      {
        name: "래더",
        width: "200px",
        renderer: (info) => {
          return `${info["ladderPoint"]}점`;
        },
      },
    ],
    data: [...userInfoList].map((item, index) => ({
      ...item,
      rank: index + 1,
    })),
  };
  return (
    <StyledDesktopWrapper>
      <StyledMainContentWrapper>
        <TablePageTitleWrapper>
          <div style={{ height: "59px", fontSize: "40px", fontWeight: "bold" }}>
            개인 랭킹
          </div>
          <div style={{ height: "29px", fontSize: "20px" }}>
            랭킹은 1시간마다 갱신되며, 배치고사가 종료된 플레이어만 표시됩니다.
          </div>
        </TablePageTitleWrapper>
        <Table {...mockTableProps} />
      </StyledMainContentWrapper>
    </StyledDesktopWrapper>
  );
};

export default Desktop;
