import React from "react";
import {
  StyledDesktopWrapper,
  StyledMainContentWrapper,
  TopBar,
} from "../../components";
import { COMMON_LAYOUT_PC_HORIZONTAL_MAX } from "../../utils/constants";
import { InfoFieldItem, MatchListItem } from "../../components/listItem";
import { StyledButtonWrapper } from "../../components/wrapper";
import styled from "@emotion/styled";
import MatchDetailTable from "../../components/table/MatchDetailTable";

const Desktop = ({
  userInfo,
  matches,
  onClickMoreButton,
  isEnd,
  selectedMatch,
  matchDetail,
  setSelectedMatch,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#775ee2",
          boxShadow: "0 5px 10px #6852c6 inset",
          paddingTop: "10px",
        }}
      >
        <TopBar
          style={{
            margin: "0 auto",
            width: "100%",
            maxWidth: COMMON_LAYOUT_PC_HORIZONTAL_MAX,
          }}
          userInfo={userInfo}
        />
      </div>

      <StyledDesktopWrapper>
        <StyledMainContentWrapper>
          <div style={{ display: "flex", marginTop: "49px", gap: "117px" }}>
            <div style={{ overflow: "auto" }}>
              <div style={{ marginBottom: "10px" }}>
                {selectedMatch && matchDetail?.status === "succeeded" && (
                  <MatchListItem
                    matchData={selectedMatch}
                    onClickRightButton={() => {
                      setSelectedMatch(null);
                    }}
                    rightButtonText={"닫기"}
                  />
                )}
                {selectedMatch &&
                  matchDetail?.data &&
                  matchDetail?.status === "succeeded" && (
                    <MatchDetailTable
                      isWin={matchDetail?.data.redTeamWin}
                      mapName={"제 3 보급 창고"}
                      gameProgressTime={matchDetail?.data.gameStartTime}
                      redTeam={matchDetail?.data.redUsers}
                      blueTeam={matchDetail?.data.blueUsers}
                    />
                  )}
              </div>
              <div style={{ marginBottom: "10px" }}>
                <DesktopContainer>
                  {(matches || []).map((match) => (
                    <MatchListItem
                      matchData={match}
                      onClickRightButton={() => {
                        setSelectedMatch(match);
                      }}
                    />
                  ))}
                </DesktopContainer>
              </div>
              {!isEnd && (
                <StyledButtonWrapper
                  onClick={onClickMoreButton}
                  height={"80px"}
                  justifyContent={"center"}
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    alignItems: "center",
                    background: "#775ee2",
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  더보기
                </StyledButtonWrapper>
              )}
            </div>
            <div
              style={{
                display: "flex",
                width: "308px",
                flexDirection: "column",
              }}
            >
              <InfoFieldItem
                fieldName={"래더"}
                value={`${userInfo?.ladderPoint}점`}
              />
              <InfoFieldItem
                fieldName={"승률"}
                value={`${userInfo?.winLosePercent?.toFixed(2)}%`}
              />
              <InfoFieldItem
                fieldName={"랭킹"}
                value={`${userInfo?.ranking}위`}
              />
              <InfoFieldItem
                fieldName={"킬뎃"}
                value={`${(userInfo?.killDeath || 0).toFixed(2)}%`}
              />
            </div>
          </div>
        </StyledMainContentWrapper>
      </StyledDesktopWrapper>
    </>
  );
};

const DesktopContainer = styled.div`
  overflow: auto;
  > * + * {
    margin-top: 10px;
  }
`;

export default Desktop;
