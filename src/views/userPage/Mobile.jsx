import React, { useState, useEffect } from "react";
import {
  Header,
  TopBar,
  Button,
  Banner,
  MapInfoList,
  BattleMap,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { MapButtonGroup } from "../../components";

const BANNER_PROPS = {
  width: "85%",
  height: "100px",
  margin: "16px auto",
};

const PLACE_BUTTON = "battlePlace";
const GUN_BUTTON = "battleGun";
const ROUND_BUTTON = "battleRound";

const Mobile = ({
  location,
  userBattle,
  clickedButton,
  handleClickedButton,
  offset,
  handleOffset,
}) => {
  const banners = useSelector((store) => store.banner);
  const { nickname, userId } = location.state;

  return (
    <>
      <Header isMobile={true} height="75px" />
      <TopBar nickname={nickname} userId={userId} battle={userBattle}></TopBar>
      <BattleMap battle={userBattle}></BattleMap>
      <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} height="50px" />
      <MapButtonGroup
        clickedButton={clickedButton}
        handleClickedButton={handleClickedButton}
        height="30px"
        width="85%"
      />
      <div style={{ marginTop: "20px" }}></div>
      <MapInfoList
        data={userBattle[clickedButton]}
        width="90%"
        margin="0 auto"
        outputText={
          (clickedButton === PLACE_BUTTON && ["place", "rate"]) ||
          (clickedButton === GUN_BUTTON && ["type", "useCount"]) ||
          (clickedButton === ROUND_BUTTON && ["round", "rate"])
        }
        offset={offset}
        handleOffset={handleOffset}
      ></MapInfoList>
      <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} />
      <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} />
      <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} height="50px" />
    </>
  );
};

export default Mobile;
