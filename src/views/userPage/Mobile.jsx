import React from "react";
import { TopBar, MapInfoList, BattleMap } from "../../components";
import { MapButtonGroup } from "../../components";

/*
const BANNER_PROPS = {
  width: "85%",
  height: "100px",
  margin: "16px auto",
};*/

const PLACE_BUTTON = "battlePlace";
const GUN_BUTTON = "battleGun";
const ROUND_BUTTON = "battleRound";

const Mobile = ({
  mapPositions,
  location,
  userBattle,
  clickedButton,
  handleClickedButton,
  offset,
  handleOffset,
}) => {
  //const banners = useSelector((store) => store.banner);
  const { nickname, userId } = location.state;

  return (
    <>
      <TopBar nickname={nickname} userId={userId} battle={userBattle} />
      <BattleMap positions={mapPositions} />
      <MapButtonGroup
        clickedButton={clickedButton}
        handleClickedButton={handleClickedButton}
        height="30px"
        width="85%"
      />
      <div style={{ marginTop: "20px" }} />
      <MapInfoList
        data={userBattle[clickedButton]}
        width="90%"
        margin="0 auto"
        outputText={
          (clickedButton === PLACE_BUTTON && ["place", "rate"]) ||
          (clickedButton === GUN_BUTTON && ["type", "useCount"]) ||
          (clickedButton === ROUND_BUTTON && ["round", "rate"])
        }
        clickedButton={clickedButton}
        offset={offset}
        handleOffset={handleOffset}
      />
      {/* <Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} /> */}
      {/*<Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} />*/}
      {/*<Banner imgUrl={banners?.data?.typeA} {...BANNER_PROPS} height="50px" />*/}
    </>
  );
};

export default Mobile;
