import React from "react";
import styled from "@emotion/styled";
import { InfoFieldItem } from "../../components/listItem";
import { TopBar } from "../../components";
import { StyledButtonWrapper } from "../../components/wrapper";
import MobileMatchTable from "../../components/table/MobileMatchTable";
const Mobile = ({
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
      <TopBar nickname={"안녕하신가"} userId={123124} userInfo={userInfo} />
      <div>
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
            value={`${userInfo?.ladderPoint}점`}
          />
          <InfoFieldItem
            height={"64px"}
            fieldName={"승률"}
            value={`${(userInfo?.winLosePercent || 0).toFixed(2)}%`}
          />
          <InfoFieldItem
            height={"64px"}
            fieldName={"랭킹"}
            value={`${userInfo?.ranking}위`}
          />
        </div>
        <MatchList>
          {(matches || []).map((match) => {
            const detailVisible =
              selectedMatch && selectedMatch.matchId === match.matchId;
            return (
              <MobileMatchTable
                key={`${match.matchId}`}
                matchId={match.matchId}
                isDetailVisible={detailVisible}
                selectedMatch={selectedMatch}
                matchDetail={detailVisible && matchDetail}
                onClickDetail={() => {
                  setSelectedMatch(match);
                }}
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

        {!isEnd && (
          <StyledButtonWrapper
            height={"80px"}
            justifyContent={"center"}
            onClick={onClickMoreButton}
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
