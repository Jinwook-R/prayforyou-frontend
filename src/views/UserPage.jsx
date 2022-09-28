import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import Map from "../components/Map";
import { searchBattle } from "../redux/battle";
import Banner from "../components/Banner";

const BANNER_PROPS = {
  width: "90%",
  height: "50px",
  margin: "16px auto",
};

const UserPage = () => {
  const location = useLocation();
  const disaptch = useDispatch();
  const banners = useSelector((store) => store.banner);
  const userBattle = useSelector((state) => state.battle.battle);
  const { nickname, userId, userNexonId, userType } = location.state;

  useEffect(() => {
    disaptch(searchBattle(userId));
  }, []);

  return (
    <>
      <Header></Header>
      {userBattle && <TopBar nickname={nickname} battle={userBattle}></TopBar>}
      <Map></Map>
      <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} />
      <StyledButtonWrapper>
        <StyledButton>포지션별</StyledButton>
        <StyledButton>주총별</StyledButton>
        <StyledButton>라운드별</StyledButton>
      </StyledButtonWrapper>
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

const StyledButton = styled.button`
  height: 30px;
  text-align: center;
  width: 75px;
  border-radius: 15px;
  border: 2px solid #6f42c1;
`;

export default UserPage;
