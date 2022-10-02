import React from "react";
import {
  StyledDesktopWrapper,
  StyledMainContentWrapper,
} from "../../components";
import { RankTable } from "../../components/table";
import sampleImg from "../../assets/clan_logo_sample_1.png";
import { User } from "../../components/common";
import {
  StyledButtonWrapper,
  TablePageTitleWrapper,
} from "../../components/wrapper";
import { useState, useCallback } from "react";

/** PrivateTableRow
 * @field
 */

const sampleClanItemData1 = {
  id: 1235123,
  rank: 1,
  thumbnail: sampleImg,
  clanName: "1부 클랜",
  winCount: 132,
  loseCount: 82,
  rate: 11.1, // winCount / (winCount+loseCount),
  ladderPoint: 1111,
};

const sampleClanItemData2 = {
  id: 1235123,
  rank: 1,
  thumbnail: sampleImg,
  clanName: "2부 클랜",
  winCount: 132,
  loseCount: 82,
  rate: 11.1, // winCount / (winCount+loseCount),
  ladderPoint: 1111,
};

const clanPageMockData = {
  first: Array.from({ length: 30 }, () => {
    return { ...sampleClanItemData1 };
  }),
  second: Array.from({ length: 30 }, () => {
    return { ...sampleClanItemData2 };
  }),
};

const Desktop = () => {
  //TODO : 필요에 따라, 아래 방식이 아닌 개별 라우트 페이지처리 필요
  const [isFirstView, setIsFirstView] = useState(true); //first or second

  const linkButtonHandler = useCallback(() => {
    setIsFirstView((prevState) => !prevState);
  }, []);
  const mockTableProps = {
    cellConfigs: [
      {
        name: "순위",
        key: "rank",
        width: "96px",
        align: "center",
      },
      {
        name: "클랜",
        width: "430px",
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
        width: "230px",
        renderer: (info) => {
          return `${info["ladderPoint"]}점`;
        },
      },
    ],
    data: [...clanPageMockData[isFirstView ? "first" : "second"]].map(
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
                onClick={linkButtonHandler}
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
        <RankTable {...mockTableProps} />
      </StyledMainContentWrapper>
    </StyledDesktopWrapper>
  );
};

export default Desktop;
