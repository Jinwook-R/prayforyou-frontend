import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const PLACE_BUTTON = "battlePlace";
const GUN_BUTTON = "battleGun";
const ROUND_BUTTON = "battleRound";

const UserPage = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${BREAK_POINT})`,
  });

  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  const location = useLocation();
  const userBattle = useSelector((state) => state.battle.battle);
  const [clickedButton, setClickedButton] = useState(PLACE_BUTTON);

  const handleClickedButton = (e) => {
    const { name } = e.target;
    setClickedButton(name);
  };

  return (
    <>
      {isMobile && (
        <Mobile
          location={location}
          userBattle={userBattle}
          clickedButton={clickedButton}
          handleClickedButton={handleClickedButton}
        />
      )}
      {isDesktop && (
        <Desktop
          location={location}
          userBattle={userBattle}
          clickedButton={clickedButton}
          handleClickedButton={handleClickedButton}
        />
      )}
    </>
  );
};

export default UserPage;
