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
  userBattlePositions,
  offset,
  handleOffset,
}) => {
  return (
    <>
      {/* <TopBar nickname={nickname} userId={userId} battle={userBattle} /> */}
      <BattleMap
        mapPositions={mapPositions}
        userBattlePositions={userBattlePositions}
      />
      <div style={{ marginTop: "20px" }} />
      <MapInfoList
        data={userBattlePositions}
        width="90%"
        margin="0 auto"
        outputText={["description", "kill", "death", "rate"]}
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
