import React from "react";
import { TopBar } from "../../components";
import { useLocation } from "react-router-dom";
import { COMMON_LAYOUT_PC_HORIZONTAL_MAX } from "../../utils/constants";
import { useSelector } from "react-redux";
const Desktop = () => {
  const location = useLocation();
  const { userId, nickname } = location.state;
  const userBattle = useSelector((state) => state.battle.battle);

  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#775ee1",
          boxShadow: "0 5px 10px #6852c6 inset",
          paddingTop: "10px",
          paddingLeft: "16px",
        }}
      >
        <TopBar
          style={{
            paddingLeft: "10px",
            margin: "0 auto",
            width: "100%",
            maxWidth: COMMON_LAYOUT_PC_HORIZONTAL_MAX,
          }}
          userId={userId}
          nickname={nickname}
          battle={userBattle}
        />
      </div>
    </>
  );
};

export default Desktop;
