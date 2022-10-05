import styled from "@emotion/styled";
import TableWithTitle from "./TableWithTitle";
import { useMemo } from "react";

const MatchDetailTable = ({ winTeam, loseTeam }) => {
  const winTeamTableProps = useMemo(() => {
    return {
      cellConfigs: [
        {
          name: "플레이어",
          style: {
            minWidth: "380px",
            flex: 1,
          },
          renderer: (user) => {
            return <div style={{ paddingLeft: "60px" }}>{user.nickname}</div>;
          },
        },
        {
          name: "래더",
          width: "254px",
          renderer: (user) => {
            return `${user.ladderPoint}점`;
          },
        },
        {
          name: "K/D",
          width: "254px",
          renderer: (user) => {
            return `${user.kill}/${user.death}`;
          },
        },
        {
          name: "무기",
          width: "254px",
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
        paddingLeft: "60px",
        background: "white",
      },
      rowStyler: () => ({ background: "#f4f2ff", fontSize: "18px" }),
    };
  }, [winTeam]);

  const loseTeamTableProps = useMemo(() => {
    return {
      cellConfigs: [
        {
          name: "플레이어",
          style: {
            minWidth: "380px",
            flex: 1,
          },
          renderer: (user) => {
            return <div style={{ paddingLeft: "60px" }}>{user.nickname} </div>;
          },
        },
        {
          name: "래더",
          width: "254px",
          renderer: (user) => {
            return `${user.ladderPoint}점`;
          },
        },
        {
          name: "K/D",
          width: "254px",
          renderer: (user) => {
            return `${user.kill}/${user.death}`;
          },
        },
        {
          name: "무기",
          width: "254px",
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
        paddingLeft: "60px",
      },
      rowStyler: () => ({ background: "#efefef", fontSize: "18px" }),
    };
  }, [loseTeam]);

  return (
    <div>
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
