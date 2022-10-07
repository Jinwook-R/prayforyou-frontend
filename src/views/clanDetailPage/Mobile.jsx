import React from "react";
import { InfoFieldItem } from "../../components/listItem";
import { ClanDetailTopBar, TopBar } from "../../components";
import { StyledButtonWrapper } from "../../components/wrapper";
import MobileMatchTable from "../../components/table/MobileMatchTable";
import styled from "@emotion/styled";
const Mobile = ({ clanInfo, matches, onClickMoreButton, isEnd }) => {
  return (
    <>
      {/* TODO : Top 바 기록실, 클랜 페이지 각각 커스텀 필요 */}
      <ClanDetailTopBar
        nickname={clanInfo.name}
        userId={clanInfo.clanId}
        ranking={clanInfo.ranking}
        winCount={clanInfo.winCount}
        loseCount={clanInfo.loseCount}
        clanLevel={clanInfo.clanLevel}
      />
      <div>
        {clanInfo?.clanId && (
          <div
            style={{
              paddingInline: "18px",
              marginBottom: "12px",
              display: "flex",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <InfoFieldItem
              height={"64px"}
              fieldName={"래더"}
              value={`${clanInfo?.ladderPoint}점`}
            />
            <InfoFieldItem
              height={"64px"}
              fieldName={"승률"}
              value={`${(clanInfo?.winLosePercent || 0).toFixed(2)}점`}
            />
            <InfoFieldItem
              height={"64px"}
              fieldName={"랭킹"}
              value={`${clanInfo?.ranking}위`}
            />
          </div>
        )}
        <MatchList>
          {(matches || []).map((match) => {
            return (
              <MobileMatchTable
                key={`${match.matchId}`}
                matchId={match.matchId}
                isWin={match.win}
                lastGameDay={match.lastGameDay}
                addScore={match.addScore}
                mapName={"제 3 보급 창고"}
                gameProgressTime={match.gameProgressTime}
                redTeam={match.redTeam}
                blueTeam={match.blueTeam}
              />
            );
          })}
        </MatchList>
        {isEnd && (matches || []).length > 0 && (
          <StyledButtonWrapper
            height={"80px"}
            onClick={onClickMoreButton}
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
    </>
  );
};

const MatchList = styled.div`
  > * + * {
    margin-top: 10px;
  }
`;

export default Mobile;
