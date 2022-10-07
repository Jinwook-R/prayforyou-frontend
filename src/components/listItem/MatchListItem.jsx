import styled from "@emotion/styled";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatchDetail } from "../../redux/record/matchDetailSlice";
import MatchDetailTable from "../table/MatchDetailTable";

const MatchListItem = ({ matchData }) => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const dispatch = useDispatch();
  const { matchMap } = useSelector((store) => store.matchDetail);

  const loadDetail = async () => {
    await dispatch(getMatchDetail({ matchId: matchData.matchId }));
  };

  const rightButtonClickHandler = async () => {
    if (isDetailVisible) {
      setIsDetailVisible(false);
    } else {
      await loadDetail();
      setIsDetailVisible(true);
    }
  };

  const winLoseColor = useMemo(() => {
    return matchData.win ? "#775ee2" : "#676472";
  }, [matchData.win]);
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "180px",
        }}
      >
        <Bar background={winLoseColor} />
        <Cell width={"120px"}>
          <div style={{ fontSize: "18px" }}>{matchData.mapName}</div>
          <div>{matchData.gameProgressTime}</div>
          <div style={{ color: winLoseColor }}>
            {matchData.win ? "승리" : "패배"}
          </div>
          <div>{matchData.lastGameDay}</div>
        </Cell>
        <Cell width={"100px"} fontSize={"18px"}>
          <div>래더</div>
          <div
            style={{ fontWeight: "bold", color: winLoseColor }}
          >{`${matchData.addScore}점`}</div>
        </Cell>
        <Cell width={"206px"} fontSize={"13px"}>
          <div style={{ fontWeight: "bold", fontSize: "18px" }}>
            {matchData.redTeam.clanName}
          </div>
          <div>{`${matchData.redTeam.clanLevel} ${matchData.redTeam.ladderPoint}`}</div>
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
            {matchData.blueTeam.clanName}
          </div>
          <div>{`${matchData.blueTeam.clanLevel} ${matchData.blueTeam.ladderPoint}`}</div>
        </Cell>
        <Cell width={"206px"} fontSize={"18px"} color={winLoseColor}>
          <div>5 vs 5</div>
        </Cell>
        <Cell width={"206px"} fontSize={"15px"}>
          {matchData.redTeam.members.map((member) => {
            return (
              <div
                key={member.id}
                onClick={() => {
                  navigate(`/record/${member.id}`);
                }}
              >
                {member.name}
              </div>
            );
          })}
        </Cell>
        <Cell width={"206px"} fontSize={"15px"}>
          {matchData.blueTeam.members.map((member) => {
            return (
              <div
                key={member.id}
                onClick={() => {
                  navigate(`/record/${member.id}`);
                }}
              >
                {member.name}
              </div>
            );
          })}
        </Cell>
        {/* 해당 페이지 도메인 + pathParam 혹은 query param 으로 처리*/}
        <DetailButton
          onClick={rightButtonClickHandler}
          background={winLoseColor}
        >
          {isDetailVisible ? "닫기" : "상세 보기"}
        </DetailButton>
      </div>
      {isDetailVisible && matchMap[matchData.matchId] && (
        <MatchDetailTable
          isWin={matchMap[matchData.matchId]?.redTeamWin}
          mapName={"제 3 보급 창고"}
          gameProgressTime={matchMap[matchData.matchId]?.gameStartTime}
          redTeam={matchMap[matchData.matchId]?.redUsers}
          blueTeam={matchMap[matchData.matchId]?.blueUsers}
        />
      )}
    </>
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
