import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { searchBattle } from "../../redux/battle";
import { fetchAllRanking } from "../../redux/ranking";
import { getMapPositions } from "../../redux/map";

const PLACE_BUTTON = "battlePlace";

const UserPage = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${BREAK_POINT})`,
  });

  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  const location = useLocation();
  const dispatch = useDispatch();
  const userBattle = useSelector((state) => state.battle.battle);
  const { positions } = useSelector((store) => store.map);
  const [clickedButton, setClickedButton] = useState(PLACE_BUTTON);
  const [offset, setOffset] = useState(1);
  const { nickname, userId } = location.state;

  useEffect(() => {
    dispatch(getMapPositions());
    dispatch(searchBattle(userId));
  }, []);

  const handleClickedButton = (e) => {
    const { name } = e.target;
    setClickedButton(name);
  };

  const handleOffset = () => {
    setOffset(offset + 1);
  };

  return (
    <>
      {isMobile && userBattle && (
        <Mobile
          location={location}
          userBattle={userBattle}
          clickedButton={clickedButton}
          handleClickedButton={handleClickedButton}
          offset={offset}
          handleOffset={handleOffset}
        />
      )}
      {isDesktop && userBattle && (
        <Desktop
          mapPositions={positions}
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
