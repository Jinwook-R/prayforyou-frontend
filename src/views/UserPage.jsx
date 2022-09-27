import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { searchBattle } from "../redux/battle";

const UserPage = () => {
  const location = useLocation();
  const { nickname, userId, userNexonId, userType } = location.state;
  const disaptch = useDispatch();
  const battleData = useSelector((state) => state.battle.battle);

  useEffect(() => {
    disaptch(searchBattle(userId));
  }, []);

  console.log(battleData);

  return (
    <>
      <Header></Header>
    </>
  );
};

export default UserPage;
