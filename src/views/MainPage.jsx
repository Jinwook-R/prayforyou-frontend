import styled from "@emotion/styled";
import Title from "../components/Title";
import Search from "../components/Search";
import DropDown from "../components/DropDown";
import Banner from "../components/Banner";
import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBanners } from "../redux/banner/bannerSlice";

const bannerProps = {
  width: "100%",
  height: "100px",
  marginBottom: "16px",
};

const MainPage = () => {
  const banners = useSelector((store) => store.banner);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBanners());
  }, []);

  const [dropDown, setDropDown] = React.useState(false);

  const handleDropDown = (value) => {
    setDropDown(value);
  };

  return (
    <div>
      <StyledMainPage>
        <Banner
          imgUrl={banners?.data?.typeA}
          {...bannerProps}
          height="50px"
          marginBottom="100px"
        />
        <Title />
        <div
          onMouseDown={(e) => {
            if (!e.target.className.includes("searchInput")) {
              e.preventDefault();
            }
          }}
        >
          <Search handleDropDown={handleDropDown} />
          {dropDown && <DropDown />}
          {!dropDown && <div style={{ width: "100%", minHeight: "250px" }} />}
        </div>
        <Banner
          imgUrl={banners?.data?.typeB}
          {...bannerProps}
          marginTop="16px"
        />
        <Banner imgUrl={banners?.data?.typeC} {...bannerProps} />
        <Banner imgUrl={banners?.data?.typeA} {...bannerProps} />
      </StyledMainPage>
    </div>
  );
};

const StyledMainPage = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export default MainPage;
