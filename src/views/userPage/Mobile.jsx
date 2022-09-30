import React, { useState, useEffect } from "react";
import { Header, TopBar, Map, Button, Banner, List } from "../../components";
import { searchBattle } from "../../redux/battle";
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
}) => {
  const disaptch = useDispatch();
  const banners = useSelector((store) => store.banner);

  const { nickname, userId } = location.state;

  const [offset, setOffset] = useState(1);

  useEffect(() => {
    disaptch(searchBattle(userId));
  }, []);

  return (
    <>
      <Header isMobile={true} height="75px" />
      <TopBar nickname={nickname} battle={userBattle}></TopBar>
      <Map battle={userBattle}></Map>
      <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} height="50px" />
      <MapButtonGroup
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
        offset={offset}
      ></List>
      <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} />
      <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} />
      <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} height="50px" />
    </>
  );
};

export default Mobile;
