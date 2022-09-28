import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header, TopBar, Map, Button, Banner, List } from "../components";
import { searchBattle } from "../redux/battle";
import styled from "@emotion/styled";

const BANNER_PROPS = {
  width: "90%",
  height: "50px",
  margin: "16px auto",
};

const POSITION_BUTTON = "position";
const MAIN_GUN_BUTTON = "mainGun";
const ROUND_BUTTON = "round";

const UserPage = () => {
  const location = useLocation();
  const disaptch = useDispatch();
  const banners = useSelector((store) => store.banner);
  const userBattle = useSelector((state) => state.battle.battle);
  const { nickname, userId, userNexonId, userType } = location.state;
  const [clickedButton, setClickedButton] = useState(POSITION_BUTTON);

  useEffect(() => {
    disaptch(searchBattle(userId));
  }, []);

  const handleClickedButton = (e) => {
    const { name } = e.target;
    setClickedButton(name);
  };

  return (
    <>
      <Header />
      {userBattle && <TopBar nickname={nickname} battle={userBattle}></TopBar>}
      {userBattle && <Map battle={userBattle}></Map>}
      <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} />
      <StyledButtonWrapper>
        <Button
          className={POSITION_BUTTON}
          name={POSITION_BUTTON}
          text="포지션별"
          handleOnClick={handleClickedButton}
          style={{
            backgroundColor:
              clickedButton === POSITION_BUTTON ? "#6f42c1" : "white",
            color: clickedButton === POSITION_BUTTON ? "white" : "black",
          }}
        />
        <Button
          className={MAIN_GUN_BUTTON}
          name={MAIN_GUN_BUTTON}
          text="주총별"
          handleOnClick={handleClickedButton}
          style={{
            backgroundColor:
              clickedButton === MAIN_GUN_BUTTON ? "#6f42c1" : "white",
            color: clickedButton === MAIN_GUN_BUTTON ? "white" : "black",
          }}
        />
        <Button
          className={ROUND_BUTTON}
          name={ROUND_BUTTON}
          text="라운드별"
          handleOnClick={handleClickedButton}
          style={{
            backgroundColor:
              clickedButton === ROUND_BUTTON ? "#6f42c1" : "white",
            color: clickedButton === ROUND_BUTTON ? "white" : "black",
          }}
        />
      </StyledButtonWrapper>
      <List data={userBattle}></List>
    </>
  );
};

const StyledButtonWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

export default UserPage;
