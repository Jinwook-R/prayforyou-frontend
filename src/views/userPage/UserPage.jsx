import React, { useState, useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import { useLocation, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { searchBattle } from "../../redux/battle";
import { getMapPositions } from "../../redux/map";
import { getUserInfo } from "../../redux/user";
import { resetStore } from "../../redux/store";

const POSITION_BUTTON = "battlePlace";

const UserPage = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${BREAK_POINT})`,
  });

  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  const { userNexonId } = useParams();
  const dispatch = useDispatch();
  const userBattlePositions = useSelector(
    (state) => state.battle.battlePositions
  );
  const { info } = useSelector((store) => store.userInfo);

  const { positions } = useSelector((store) => store.map);
  const [clickedButton, setClickedButton] = useState(POSITION_BUTTON);
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    dispatch(getMapPositions());
    dispatch(searchBattle({ userNexonId }));
    dispatch(getUserInfo({ userNexonId }));
    return () => {
      dispatch(resetStore());
    };
  }, [dispatch, userNexonId]);

  const handleClickedButton = (e) => {
    const { name } = e.target;
    setClickedButton(name);
  };

  const handleOffset = () => {
    setOffset(offset + 1);
  };

  const parsedPositions = useMemo(() => {
    let result = [];
    const battleDataMap = new Map();
    userBattlePositions?.forEach((data) => {
      if (data?.place)
        battleDataMap.set(
          data.description,
          Math.floor(data.kill / data.kill + data.death) * 100
        );
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
  }, [positions, userBattlePositions]);

  return (
    <>
      {isMobile && userBattlePositions && (
        <Mobile
          mapPositions={parsedPositions}
          userBattlePositions={userBattlePositions}
          offset={offset}
          userInfo={info}
          handleOffset={handleOffset}
        />
      )}
      {isDesktop && userBattlePositions && (
        <Desktop
          mapPositions={parsedPositions}
          userBattlePositions={userBattlePositions}
          offset={offset}
          userInfo={info}
          handleOffset={handleOffset}
        />
      )}
    </>
  );
};

export default UserPage;
