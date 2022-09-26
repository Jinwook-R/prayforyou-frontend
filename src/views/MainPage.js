import styled from "@emotion/styled";
import Title from "../components/Title";
import Search from "../components/Search";
import DropDown from "../components/DropDown";
import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBanners } from "../redux/banner/bannerSlice";

const StyledMainPage = styled.div`
  width: 350px;
  margin: 0 auto;
  text-align: center;
`;

const MainPage = () => {
  const banner = useSelector((store) => store.banner);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBanners());
  }, []);

  return (
    <div>
      <StyledMainPage>
        <Title />
        <Search />
        {/* <DropDown /> */}
      </StyledMainPage>
    </div>
  );
};

export default MainPage;
