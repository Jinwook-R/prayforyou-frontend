import styled from "@emotion/styled";
import TableWithTitle from "./TableWithTitle";
import { useMemo } from "react";

const MatchDetailTable = ({ winTeam, loseTeam, gameTime, mapName }) => {
  const winTeamTableProps = useMemo(() => {
    return {
      cellConfigs: [
        {
          name: <div style={{ paddingLeft: "60px" }}>플레이어</div>,
          style: {
            width: "380px",
            flex: 1,
          },
          renderer: (user) => {
            return <div style={{ paddingLeft: "60px" }}>{user.nickname}</div>;
          },
        },
        {
          name: "래더",
          style: {
            width: "254px",
            flex: 1,
          },
          renderer: (user) => {
            return `${user.ladderPoint}점`;
          },
        },
        {
          name: "K/D",
          style: {
            width: "254px",
            flex: 1,
          },
          renderer: (user) => {
            return `${user.kill}/${user.death}`;
          },
        },
        {
          name: "무기",
          style: {
            width: "254px",
            flex: 1,
          },
          renderer: (user) => {
            return `${user.weapon}`;
          },
        },
      ],
      data: [...winTeam.members],
      headerStyle: {
        fontWeight: "normal",
        fontSize: "18px",
        color: "black",
        background: "white",
      },
      rowStyler: () => ({ background: "#f4f2ff", fontSize: "18px" }),
    };
  }, [winTeam]);

  const loseTeamTableProps = useMemo(() => {
    return {
      cellConfigs: [
        {
          name: <div style={{ paddingLeft: "60px" }}>플레이어</div>,
          style: {
            width: "380px",
            flex: 1,
          },
          renderer: (user) => {
            return <div style={{ paddingLeft: "60px" }}>{user.nickname} </div>;
          },
        },
        {
          name: "래더",
          style: {
            width: "254px",
            flex: 1,
          },
          renderer: (user) => {
            return `${user.ladderPoint}점`;
          },
        },
        {
          name: "K/D",
          style: {
            width: "254px",
            flex: 1,
          },
          renderer: (user) => {
            return `${user.kill}/${user.death}`;
          },
        },
        {
          name: "무기",

          style: {
            width: "254px",
            flex: 1,
          },
          renderer: (user) => {
            return `${user.weapon}`;
          },
        },
      ],
      data: [...winTeam.members],
      headerStyle: {
        fontWeight: "normal",
        fontSize: "18px",
        background: "white",
        color: "black",
      },
      rowStyler: () => ({ background: "#efefef", fontSize: "18px" }),
    };
  }, [loseTeam]);

  return (
    <div>
      <TableHeader>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px" }}>{mapName}</div>
          <div>5 vs 5</div>
        </div>
        <div>{gameTime}</div>
      </TableHeader>
      <TableWithTitle
        title={<TableTitle background={"#775ee2"}>승리</TableTitle>}
        {...winTeamTableProps}
      />
      <TableWithTitle
        title={<TableTitle background={"#676472"}>패배</TableTitle>}
        {...loseTeamTableProps}
      />
    </div>
  );
};

const TableHeader = styled.div`
  height: 60px;
  background: #f4f2ff;
  padding-left: 18px;
  padding-right: 40px;
  font-size: 18px;
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
  font-size: 18px;
  padding: 15px 18px;
`;

export default MatchDetailTable;
