import {
  ClanDetailTopBar,
  StyledDesktopWrapper,
  StyledMainContentWrapper,
} from "../../components";
import { InfoFieldItem, MatchListItem } from "../../components/listItem";
import { COMMON_LAYOUT_PC_HORIZONTAL_MAX } from "../../utils/constants";
import React from "react";
import styled from "@emotion/styled";
import MatchDetailTable from "../../components/table/MatchDetailTable";
import { StyledButtonWrapper } from "../../components/wrapper";

const Desktop = ({
  clanInfo,
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
        <ClanDetailTopBar
          style={{
            margin: "0 auto",
            width: "100%",
            maxWidth: COMMON_LAYOUT_PC_HORIZONTAL_MAX,
          }}
          openKaKaoLink={clanInfo.openKaKaoLink}
          clanLevel={clanInfo.clanLevel}
          winCount={clanInfo.winCount}
          loseCount={clanInfo.loseCount}
          ranking={clanInfo.ranking}
          userId={clanInfo.clanId}
          nickname={clanInfo.name}
        />
      </div>
      <StyledDesktopWrapper>
        {/* TODO : Top 바 기록실, 클랜 페이지 각각 커스텀 필요 */}
        <StyledMainContentWrapper>
          <div style={{ display: "flex", marginTop: "49px", gap: "117px" }}>
            <div style={{ overflow: "auto" }}>
              <div style={{ marginBottom: "10px" }}>
                <DesktopContainer>
                  {(matches || []).map((match, index) => (
                    <MatchListItem
                      key={`${match.matchId}-${index}`}
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
            {clanInfo && (
              <div
                style={{
                  display: "flex",
                  width: "308px",
                  flexDirection: "column",
                }}
              >
                <InfoFieldItem
                  fieldName={"래더"}
                  value={`${clanInfo?.ladderPoint}점`}
                />
                <InfoFieldItem
                  fieldName={"승률"}
                  value={`${(clanInfo?.winLosePercent || 0).toFixed(2)}%`}
                />
                <InfoFieldItem
                  fieldName={"랭킹"}
                  value={`${clanInfo.ranking}위`}
                />
              </div>
            )}
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
