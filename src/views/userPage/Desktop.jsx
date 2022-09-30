import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchBattle } from "../../redux/battle";
import { Map, Ranking } from "../../components";
import { ButtonGroup, TopBar, List } from "../../components";

const PLACE_BUTTON = "battlePlace";
const GUN_BUTTON = "battleGun";
const ROUND_BUTTON = "battleRound";

const Desktop = ({
  location,
  userBattle,
  clickedButton,
  handleClickedButton,
}) => {
  const disaptch = useDispatch();
  const { nickname, userId, userNexonId, userType } = location.state;

  useEffect(() => {
    disaptch(searchBattle(userId));
  }, []);

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
            <ButtonGroup
              clickedButton={clickedButton}
              handleClickedButton={handleClickedButton}
            />
            <List
              data={userBattle[clickedButton]}
              width="90%"
              outputText={
                (PLACE_BUTTON && ["place", "rate"]) ||
                (GUN_BUTTON && ["type", "useCount"]) ||
                (ROUND_BUTTON && ["round", "rate"])
              }
            ></List>
            <div>Banner</div>
            <div>Banner</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop;
