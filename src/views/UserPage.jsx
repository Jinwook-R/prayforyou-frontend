import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header, TopBar, Map, Button, Banner, List } from "../components";
import { searchBattle } from "../redux/battle";
import styled from "@emotion/styled";

const BANNER_PROPS = {
  width: "85%",
  height: "100px",
  margin: "16px auto",
};

const PLACE_BUTTON = "battlePlace";
const GUN_BUTTON = "battleGun";
const ROUND_BUTTON = "battleRound";

const UserPage = () => {
  const location = useLocation();
  const disaptch = useDispatch();
  const banners = useSelector((store) => store.banner);
  const userBattle = useSelector((state) => state.battle.battle);
  const { nickname, userId, userNexonId, userType } = location.state;
  const [clickedButton, setClickedButton] = useState(PLACE_BUTTON);

  useEffect(() => {
    disaptch(searchBattle(userId));
  }, []);

  const handleClickedButton = (e) => {
    const { name } = e.target;
    setClickedButton(name);
  };

  console.log(userBattle);

  return (
    <>
      <Header />
      <TopBar nickname={nickname} battle={userBattle}></TopBar>
      <Map battle={userBattle}></Map>
      <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} height="50px" />
      <StyledButtonWrapper>
        <Button
          className={PLACE_BUTTON}
          name={PLACE_BUTTON}
          text="포지션별"
          handleOnClick={handleClickedButton}
          style={{
            backgroundColor:
              clickedButton === PLACE_BUTTON ? "#775ee2" : "white",
            color: clickedButton === PLACE_BUTTON ? "white" : "black",
            width: "75px",
          }}
        />
        <Button
          className={GUN_BUTTON}
          name={GUN_BUTTON}
          text="주총별"
          handleOnClick={handleClickedButton}
          style={{
            backgroundColor: clickedButton === GUN_BUTTON ? "#775ee2" : "white",
            color: clickedButton === GUN_BUTTON ? "white" : "black",
            width: "75px",
          }}
        />
        <Button
          className={ROUND_BUTTON}
          name={ROUND_BUTTON}
          text="라운드별"
          handleOnClick={handleClickedButton}
          style={{
            backgroundColor:
              clickedButton === ROUND_BUTTON ? "#775ee2" : "white",
            color: clickedButton === ROUND_BUTTON ? "white" : "black",
            width: "75px",
          }}
        />
      </StyledButtonWrapper>
      <List
        data={userBattle[clickedButton]}
        width="90%"
        outputText={
          (PLACE_BUTTON && ["place", "rate"]) ||
          (GUN_BUTTON && ["type", "useCount"]) ||
          (ROUND_BUTTON && ["round", "rate"])
        }
      ></List>
      <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} />
      <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} />
      <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} height="50px" />
    </>
  );
};

const StyledButtonWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

export default UserPage;
