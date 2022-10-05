import React from "react";
import { InfoFieldItem } from "../../components/listItem";
import { TopBar } from "../../components";
import { StyledButtonWrapper } from "../../components/wrapper";
import MobileMatchTable from "../../components/table/MobileMatchTable";
const Mobile = ({ userBattle, matches }) => {
  return (
    <>
      {/* TODO : Top 바 기록실, 클랜 페이지 각각 커스텀 필요 */}
      <TopBar nickname={"토끼토끼 클랜"} userId={123124} battle={userBattle} />
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
            value={`${1231}점`}
          />
          <InfoFieldItem
            height={"64px"}
            fieldName={"승률"}
            value={`${1231}점`}
          />
          <InfoFieldItem
            height={"64px"}
            fieldName={"랭킹"}
            value={`${1231}점`}
          />
        </div>
        <div>
          {matches.map((match, index) => {
            return (
              <MobileMatchTable
                isDetailVisible={index === 1}
                key={`${match.matchId}`}
                isWin={match.isWin}
                lastGameDay={match.lastGameDay}
                addScore={match.addScore}
                mapName={match.mapName}
                gameTime={match.gameTime}
                redTeam={match.redTeam}
                blueTeam={match.blueTeam}
              />
            );
          })}
        </div>

        <StyledButtonWrapper
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
      </div>
    </>
  );
};

export default Mobile;
