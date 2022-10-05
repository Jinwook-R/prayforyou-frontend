import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useMemo } from "react";

export const MatchMockUser = {
  nickname: "유저 이름입니다",
  userId: 12312,
};

const MatchMockTeam = {
  clanName: "토끼토끼",
  clanId: 1241231,
  clanLevel: "1부 리그",
  ladderPoint: 1972,
  members: Array.from({ length: 5 }, (_, index) => {
    return { ...MatchMockUser };
  }),
};
export const MatchRecordMockData = {
  matchingMap: "제3보급창고",
  gameProgressTime: "18분 12초",
  isWin: false,
  matchId: 1231241,
  lastGameDay: "5일 전",
  addScore: -18,
  isFirstRed: Boolean,
  redTeam: {
    ...MatchMockTeam,
  },
  blueTeam: {
    ...MatchMockTeam,
  },
};
const MatchListItem = ({ matchRecordMockData }) => {
  const winLoseColor = useMemo(() => {
    return matchRecordMockData.isWin ? "#775ee2" : "#676472";
  }, [matchRecordMockData.isWin]);
  return (
    <div style={{ display: "flex", height: "180px" }}>
      <Bar background={winLoseColor} />
      <Cell width={"120px"}>
        <div style={{ fontSize: "18px" }}>
          {matchRecordMockData.matchingMap}
        </div>
        <div>{matchRecordMockData.gameProgressTime}</div>
        <div style={{ color: winLoseColor }}>
          {matchRecordMockData.isWin ? "승리" : "패배"}
        </div>
        <div>{matchRecordMockData.lastGameDay}</div>
      </Cell>
      <Cell width={"100px"} fontSize={"18px"}>
        <div>래더</div>
        <div
          style={{ fontWeight: "bold", color: winLoseColor }}
        >{`${matchRecordMockData.addScore}점`}</div>
      </Cell>
      <Cell width={"206px"} fontSize={"13px"}>
        <div style={{ fontWeight: "bold", fontSize: "18px" }}>
          {matchRecordMockData.redTeam.clanName}
        </div>
        <div>{`${matchRecordMockData.redTeam.clanLevel} ${matchRecordMockData.redTeam.ladderPoint}`}</div>
      </Cell>
      <Cell
        width={"50px"}
        fontSize={"10px"}
        color={"white"}
        background={winLoseColor}
      >
        vs
      </Cell>
      <Cell width={"206px"} fontSize={"13px"}>
        <div style={{ fontWeight: "bold", fontSize: "18px" }}>
          {matchRecordMockData.blueTeam.clanName}
        </div>
        <div>{`${matchRecordMockData.blueTeam.clanLevel} ${matchRecordMockData.blueTeam.ladderPoint}`}</div>
      </Cell>
      <Cell width={"206px"} fontSize={"18px"} color={winLoseColor}>
        <div>5 vs 5</div>
      </Cell>
      <Cell width={"206px"} fontSize={"15px"}>
        {matchRecordMockData.redTeam.members.map((member) => {
          return (
            <div
              key={member.userId}
              onClick={() => {
                // navigate route
              }}
            >
              {member.nickname}
            </div>
          );
        })}
      </Cell>
      <Cell width={"206px"} fontSize={"15px"}>
        {matchRecordMockData.blueTeam.members.map((member) => {
          return (
            <div
              key={member.userId}
              onClick={() => {
                // navigate route
              }}
            >
              {member.nickname}
            </div>
          );
        })}
      </Cell>
      {/* 해당 페이지 도메인 + pathParam 혹은 query param 으로 처리*/}
      <DetailButton background={winLoseColor} to={matchRecordMockData.matchId}>
        상세 보기
      </DetailButton>
    </div>
  );
};

const Cell = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.fontSize || "15px"};
  gap: ${(props) => props.gap || "8px"};
  justify-content: center;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  align-items: center;
  height: 100%;
`;

const Bar = styled.div`
  width: 20px;
  height: 100%;
  color: white;
  background: ${(props) => props.background};
`;

const DetailButton = styled(NavLink)`
  text-decoration: none;
  display: flex;
  width: 95px;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontSize || "15px"};
  font-weight: bold;
  background: ${(props) => props.background};
  color: white;
`;

export default MatchListItem;