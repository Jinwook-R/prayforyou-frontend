import React from "react";
import { useLocation } from "react-router-dom";
import { Map, Ranking } from "../../components";
import { useSelector } from "react-redux";
import { ButtonGroup, TopBar } from "../../components";

const Desktop = () => {
  const location = useLocation();
  const userBattle = useSelector((state) => state.battle.battle);
  const ranking = useSelector((store) => store.ranking.ranking);
  const { nickname, userId, userNexonId, userType } = location.state;

  return (
    <>
      <div style={{ display: "flex" }}>
        <TopBar nickname={nickname} battle={userBattle}></TopBar>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <Map battle={userBattle}></Map>
        <div>
          <ButtonGroup></ButtonGroup>
          <Ranking data={ranking} />
        </div>
      </div>
    </>
  );
};

export default Desktop;
