import React from "react";
import { TopBar, MapInfoList, BattleMap } from "../../components";
import useLocalStorage from "../../hooks/useLocalStorage";
/*
const BANNER_PROPS = {
  width: "85%",
  height: "100px",
  margin: "16px auto",
};*/

const Mobile = ({
  mapPositions,
  location,
  userBattlePositions,
  offset,
  handleOffset,
}) => {
  const { nickname, userId } = location.state;
  return (
    <>
      {/* <TopBar nickname={nickname} userId={userId} battle={userBattle} /> */}
      <BattleMap positions={mapPositions} />
      <div style={{ marginTop: "20px" }} />
      <MapInfoList
        data={userBattlePositions}
        width="90%"
        margin="0 auto"
        outputText={["description", "rate"]}
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
