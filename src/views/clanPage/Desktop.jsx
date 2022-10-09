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
import { useNavigate } from "react-router-dom";

/** PrivateTableRow
 * @field
 */

const Desktop = ({
  isFirstView,
  onClickViewChange,
  clanData,
  isEnd,
  onClickMoreButton,
}) => {
  const navigate = useNavigate();
  const clanTableProps = {
    cellConfigs: [
      {
        name: "순위",
        key: "rank",
        style: {
          width: "96px",
          flex: 2,
        },
        align: "center",
      },
      {
        name: "클랜",

        style: {
          width: "430px",
          flex: 7,
        },
        renderer: (info) => {
          {
            /* TODO : export extra component, <User {...userProps} />} */
          }
          return (
            <User
              onClick={() => {
                navigate(`/clan/${info.clanId}`);
              }}
              thumbnail={info.clanMarkUrl}
              name={info.clanName}
            />
          );
        },
      },
      {
        name: "승리",
        style: {
          width: "200px",
          flex: 2,
        },
        renderer: (info) => {
          return `${info["winCount"]}승`;
        },
      },
      {
        name: "패배",
        style: {
          width: "200px",
          flex: 2,
        },
        renderer: (info) => {
          return `${info["loseCount"]}패`;
        },
      },
      {
        name: "승률",
        style: {
          width: "200px",
          flex: 2,
        },
        renderer: (info) => {
          return `${(info["winLosePercent"] || 0).toFixed(1)}%`;
        },
      },
      {
        name: "래더",
        style: {
          width: "200px",
          flex: 2,
        },
        renderer: (info) => {
          return `${info["score"]}점`;
        },
      },
    ],
    data: clanData,
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
                랭킹은 20분마다 갱신되고, 래더 점수 기준으로 순위가 판정됩니다.
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
                  cursor: "pointer",
                }}
              >
                {`${isFirstView ? 2 : 1}부 리그 보러가기 >`}
              </StyledButtonWrapper>
            </div>
          </div>
        </TablePageTitleWrapper>
        <Table
          isEnd={isEnd}
          onClickMoreButton={onClickMoreButton}
          rowStyler={(clanData) => {
            return {
              background: clanData.downDanger ? "#ffebeb" : "white",
            };
          }}
          {...clanTableProps}
        />
      </StyledMainContentWrapper>
    </StyledDesktopWrapper>
  );
};

export default Desktop;
