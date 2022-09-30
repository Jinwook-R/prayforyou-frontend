import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const PLACE_BUTTON = "battlePlace";

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
  const [offset, setOffset] = useState(1);

  const handleClickedButton = (e) => {
    const { name } = e.target;
    setClickedButton(name);
  };

  const handleOffset = () => {
    setOffset(offset + 1);
  };

  return (
    <>
      {isMobile && (
        <Mobile
          location={location}
          userBattle={userBattle}
          clickedButton={clickedButton}
          handleClickedButton={handleClickedButton}
          offset={offset}
          handleOffset={handleOffset}
        />
      )}
      {isDesktop && (
        <Desktop
          location={location}
          userBattle={userBattle}
          clickedButton={clickedButton}
          handleClickedButton={handleClickedButton}
          offset={offset}
          handleOffset={handleOffset}
        />
      )}
    </>
  );
};

export default UserPage;
