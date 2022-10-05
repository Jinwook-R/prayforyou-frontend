import styled from "@emotion/styled";
import { ReactComponent as DownArrow } from "../../assets/down_arrow.svg";

import { useCallback, useMemo } from "react";
import TableWithTitle from "./TableWithTitle";

const MatchDetailTable = ({ redTeam, blueTeam, gameTime, isWin }) => {
  const getWinLoseColor = useCallback((isWinner) => {
    return isWinner ? "#775ee2" : "#676472";
  }, []);

  const redTeamTableProps = useMemo(() => {
    return {
      cellConfigs: [
        {
          name: <div style={{ paddingLeft: "14px" }}>플레이어</div>,
          style: {
            width: "170px",
            flex: 1,
          },
          renderer: (user) => {
            return (
              <div style={{ paddingLeft: "14px", fontWeight: "bold" }}>
                {user.nickname}
              </div>
            );
          },
        },
        {
          name: "무기",
          style: {
            width: "73px",
            flex: 1,
          },
          renderer: (user) => {
            return `${user.weapon}`;
          },
        },
        {
          name: "K/D",
          style: {
            width: "100px",
            flex: 1,
          },
          renderer: (user) => {
            return `${user.kill}/${user.death}`;
          },
        },
      ],
      data: [...redTeam.members],
      headerStyle: {
        fontWeight: "normal",
        fontSize: "15px",
        color: "black",
        height: "30px",
        background: isWin ? "#f4f2ff" : "#efefef",
      },
      rowStyler: () => ({
        background: "white",
        fontSize: "15px",
        height: "40px",
      }),
    };
  }, [redTeam, isWin]);

  const blueTeamTableProps = useMemo(() => {
    return {
      cellConfigs: [
        {
          name: <div style={{ paddingLeft: "14px" }}>플레이어</div>,
          style: {
            width: "170px",
            flex: 1,
          },
          renderer: (user) => {
            return (
              <div style={{ paddingLeft: "14px", fontWeight: "bold" }}>
                {user.nickname}
              </div>
            );
          },
        },
        {
          name: "무기",
          style: {
            width: "73px",
            flex: 1,
          },
          renderer: (user) => {
            return `${user.weapon}`;
          },
        },
        {
          name: "K/D",
          style: {
            width: "100px",
            flex: 1,
          },
          renderer: (user) => {
            return `${user.kill}/${user.death}`;
          },
        },
      ],
      data: [...blueTeam.members],
      headerStyle: {
        fontWeight: "normal",
        fontSize: "15px",
        height: "30px",
        background: !isWin ? "#f4f2ff" : "#efefef",
        color: "black",
      },
      rowStyler: () => ({
        background: "white",
        fontSize: "15px",
        height: "40px",
      }),
    };
  }, [blueTeam, isWin]);

  return (
    <div>
      <TableHeader background={getWinLoseColor(isWin)}>
        <div>5 vs 5</div>
        <div>{gameTime}</div>
      </TableHeader>
      <TableWithTitle
        title={
          <TableTitle background={getWinLoseColor(isWin)}>
            <div
              style={{
                display: "flex",
                color: "white",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <div style={{ marginRight: "10px" }}>
                {isWin ? "승리" : "패배"}
              </div>
              <div>{redTeam.clanName}</div>
            </div>
          </TableTitle>
        }
        {...redTeamTableProps}
      />
      <TableWithTitle
        title={
          <TableTitle background={getWinLoseColor(!isWin)}>
            <div
              style={{
                display: "flex",
                color: "white",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <div style={{ marginRight: "10px" }}>
                {!isWin ? "승리" : "패배"}
              </div>
              <div>{blueTeam.clanName}</div>
            </div>
          </TableTitle>
        }
        {...blueTeamTableProps}
      />
    </div>
  );
};

const TableHeader = styled.div`
  height: 60px;
  background: ${(props) => props.background};
  border-bottom: 1px solid white;
  color: white;
  padding-left: 18px;
  padding-right: 40px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TableTitle = styled.div`
  background: ${(props) => props.background};
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 15px;
  padding: 15px 18px;
`;

const MobileMatchTable = ({
  mapName,
  lastGameDay,
  addScore,
  gameTime,
  isWin,
  kill,
  death,
  blueTeam,
  redTeam,
  onClickMoreButton,
  isDetailVisible,
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", width: "100%", height: "130px" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <ListItemTitle background={isWin ? "#775ee2" : "#676472"}>
            <div>{`${mapName} - ${lastGameDay}`}</div>
            <div>{`${addScore}점`}</div>
          </ListItemTitle>
          <ListItemBody>
            <ListItemBodyCell width={"50px"}>
              {isWin ? "승" : "패"}
            </ListItemBodyCell>
            <ListItemBodyCell width={"60px"}>
              <div>{`무슨 값이지`}</div>
              <div style={{ fontSize: "10px" }}>{`(무슨값이지 %)`}</div>
            </ListItemBodyCell>
            <ListItemBodyCell width={"95px"}>
              {redTeam.clanName}
            </ListItemBodyCell>
            <ListItemBodyCell width={"95px"}>
              {blueTeam.clanName}
            </ListItemBodyCell>
          </ListItemBody>
        </div>
        <MoreButton
          className={isDetailVisible ? "active" : ""}
          onClick={onClickMoreButton}
          background={isWin ? "#775ee2" : "#676472"}
        >
          <div style={{ width: "14px" }}>
            <DownArrow />
          </div>
        </MoreButton>
      </div>
      {isDetailVisible && (
        <MatchDetailTable
          redTeam={redTeam}
          blueTeam={blueTeam}
          gameTime={gameTime}
          isWin={isWin}
        />
      )}
    </div>
  );
};

const ListItemTitle = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 12px 9px 14px;
  background: ${(props) => props.background || "#775ee2"};
  color: ${(props) => props.color || "white"};
`;
const ListItemBody = styled.div`
  background: #f4f2ff;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ListItemBodyCell = styled.div`
  flex: 1;
  width: ${(props) => props.width};
  text-align: center;
  font-size: 15px;
  font-weight: ${(props) => props.fontWeight};
`;

const MoreButton = styled.div`
  background: ${(props) => props.background || "#775ee2"};
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 35px;
  &.active svg {
    transform: rotate(180deg);
  }
`;

export default MobileMatchTable;