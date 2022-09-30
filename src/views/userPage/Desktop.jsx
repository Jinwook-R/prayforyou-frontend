import React from "react";
import { useLocation } from "react-router-dom";
import { Map, Ranking } from "../../components";
import { useSelector } from "react-redux";
import { ButtonGroup, TopBar } from "../../components";
import useWindowSize from "../../hooks/useWindowSize";

const Desktop = () => {
  const location = useLocation();
  const userBattle = useSelector((state) => state.battle.battle);
  const ranking = useSelector((store) => store.ranking.ranking);
  const { nickname, userId, userNexonId, userType } = location.state;
  const [width] = useWindowSize();

  return (
    <>
      <div
        style={{
          display: "flex",
          minWidth: "1615px",
          backgroundColor: "#775ee1",
          boxShadow: "0 5px 10px #6852c6 inset",
          paddingTop: "10px",
        }}
      >
        <TopBar nickname={nickname} battle={userBattle}></TopBar>
      </div>
      <div
        style={{
          minWidth: "1615px",
          // margin: "30px auto 16px",
        }}
      >
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            maxWidth: "1500px",
            margin: "0 auto",
            marginTop: "32px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: "40%",
            }}
          >
            <Map battle={userBattle}></Map>
            <div>Banner</div>
            <div>Banner</div>
          </div>
          <div
            style={{
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: "45%",
            }}
          >
            <ButtonGroup />
            <Ranking data={ranking} />
            <div>Banner</div>
            <div>Banner</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop;
