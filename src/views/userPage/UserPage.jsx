import React, { useState, useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { searchBattle } from "../../redux/battle";
import { getMapPositions } from "../../redux/map";

const POSITION_BUTTON = "battlePlace";

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
  const [clickedButton, setClickedButton] = useState(POSITION_BUTTON);
  const [offset, setOffset] = useState(1);
  const { userId } = location.state;

  useEffect(() => {
    dispatch(getMapPositions());
    dispatch(searchBattle(userId));
  }, [dispatch, userId]);

  const handleClickedButton = (e) => {
    const { name } = e.target;
    setClickedButton(name);
  };

  const handleOffset = () => {
    setOffset(offset + 1);
  };

  const userBattlePlaceData = userBattle.battlePlace;

  const parsedPositions = useMemo(() => {
    let result = [];
    const battleDataMap = new Map();
    userBattlePlaceData.forEach((data) => {
      if (data?.place) battleDataMap.set(data.place, data.rate);
    });
    (positions || []).forEach((mapData) => {
      const polygonString = mapData.polygon;
      if (polygonString.includes("POLYGON")) {
        result.push({
          polygon: polygonString.replaceAll(
            new RegExp(/(POLYGON \(\()|(\)\))/g),
            ""
          ),
          placeType: mapData.placeType,
          rate: battleDataMap.get(mapData.placeType) || "0",
        });
      }
    });
    return result;
  }, [positions, userBattlePlaceData]);

  return (
    <>
      {isMobile && userBattle && (
        <Mobile
          mapPositions={parsedPositions}
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
          mapPositions={parsedPositions}
          location={location}
          userBattle={userBattle}
          clickedButton={POSITION_BUTTON}
          // handleClickedButton={handleClickedButton}
          offset={offset}
          handleOffset={handleOffset}
        />
      )}
    </>
  );
};

export default UserPage;
