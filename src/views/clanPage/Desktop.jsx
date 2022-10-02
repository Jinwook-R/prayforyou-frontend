import React from "react";
import {
  StyledDesktopWrapper,
  StyledMainContentWrapper,
} from "../../components";
import { Table } from "../../components/table";
import { User } from "../../components/common";
import {
  StyledButtonWrapper,
  TablePageTitleWrapper,
} from "../../components/wrapper";

/** PrivateTableRow
 * @field
 */

const Desktop = ({ isFirstView, onClickViewChange, clanData }) => {
  const clanTableProps = {
    cellConfigs: [
      {
        name: "순위",
        key: "rank",
        width: "96px",
        align: "center",
      },
      {
        name: "클랜",
        style: { flex: 1, minWidth: "430px" },
        renderer: (info) => {
          {
            /* TODO : export extra component, <User {...userProps} />} */
          }
          return <User thumbnail={info.thumbnail} name={info.clanName} />;
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
        name: "래더",
        width: "200px",
        renderer: (info) => {
          return `${info["ladderPoint"]}점`;
        },
      },
    ],
    data: [...clanData[isFirstView ? "first" : "second"]].map(
      (item, index) => ({
        ...item,
        rank: index + 1,
      })
    ),
  };
  return (
    <StyledDesktopWrapper>
      <StyledMainContentWrapper>
        <TablePageTitleWrapper>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{ height: "59px", fontSize: "40px", fontWeight: "bold" }}
              >
                {isFirstView ? "1부 리그" : "2부리그"}
              </div>
              <div style={{ height: "29px", fontSize: "20px" }}>
                랭킹은 1시간마다 갱신되며, 배치고사가 종료된 클랜만 표시됩니다.
              </div>
            </div>
            <div
              style={{ flex: "none", display: "flex", alignItems: "center" }}
            >
              <StyledButtonWrapper
                onClick={onClickViewChange}
                justifyContent={"center"}
                height={"50px"}
                style={{
                  width: "211px",
                  alignItems: "center",
                  background: "#775ee1",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                  borderRadius: "25px",
                }}
              >
                {`${isFirstView ? 2 : 1}부 리그 보러가기 >`}
              </StyledButtonWrapper>
            </div>
          </div>
        </TablePageTitleWrapper>
        <Table
          rowStyler={(clanData) => {
            return {
              background: clanData.isLadderDownTarget ? "#ffebeb" : "white",
            };
          }}
          {...clanTableProps}
        />
      </StyledMainContentWrapper>
    </StyledDesktopWrapper>
  );
};

export default Desktop;
