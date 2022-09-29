import React from "react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Title, Search, DropDown, Banner, Header, List } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBanners } from "../redux/banner/bannerSlice";
import { fetchAllRanking } from "../redux/ranking/rankingSlice";
import { BREAK_POINT } from "../utils/constants";
import styled from "@emotion/styled";
import Ranking from "../components/Ranking";

const bannerProps = {
  width: "100%",
  height: "100px",
  marginBottom: "16px",
};

const MainPage = () => {
  const banners = useSelector((store) => store.banner);
  const ranking = useSelector((store) => store.ranking.ranking);
  const dispatch = useDispatch();
  const isDesktopOrLabtop = useMediaQuery({
    query: `(min-width: ${BREAK_POINT})`,
  });
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  useEffect(() => {
    dispatch(fetchAllBanners());
    isDesktopOrLabtop && dispatch(fetchAllRanking());
  }, []);

  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = (value) => {
    setDropDown(value);
  };

  // console.log(ranking);

  return (
    <div>
      <StyledMainPage>
        {isTabletOrMobile && (
          <div style={{ padding: "0 16px" }}>
            <Banner
              imgUrl={banners?.data?.typeA}
              {...bannerProps}
              height="50px"
              marginBottom="100px"
              marginTop="35px"
            />
            <Title width="250px" marginBottom="20px" />
            <div
              onMouseDown={(e) => {
                if (!e.target.className.includes("searchInput")) {
                  e.preventDefault();
                }
              }}
            >
              <Search handleDropDown={handleDropDown} />
              {dropDown && <DropDown />}
              {!dropDown && (
                <div
                  style={{
                    height: "250px",
                  }}
                />
              )}
            </div>
            <Banner
              imgUrl={banners?.data?.typeB}
              {...bannerProps}
              marginTop="16px"
              width="90%"
              marginLeft="auto"
              marginRight="auto"
            />
            <Banner
              imgUrl={banners?.data?.typeC}
              {...bannerProps}
              width="90%"
              marginLeft="auto"
              marginRight="auto"
            />
            <Banner
              imgUrl={banners?.data?.typeA}
              {...bannerProps}
              height="50px"
            />
          </div>
        )}
        {isDesktopOrLabtop && (
          <>
            <StyledDesktopOrLabtopWrapper>
              <StyledBannerWrapper>
                <Banner
                  imgUrl={banners?.data?.typeA}
                  {...bannerProps}
                  width={"300px"}
                  height={"600px"}
                />
                <Banner
                  imgUrl={banners?.data?.typeA}
                  {...bannerProps}
                  width={"300px"}
                  height={"600px"}
                />
              </StyledBannerWrapper>
              <StyledMainContentWrapper>
                <Title width="280px" marginBottom="30px" />
                <div
                  onMouseDown={(e) => {
                    if (!e.target.className.includes("searchInput")) {
                      e.preventDefault();
                    }
                  }}
                  style={{ position: "relative" }}
                >
                  <Search handleDropDown={handleDropDown} />
                  {dropDown && (
                    <DropDown
                      position="absolute"
                      top={54}
                      left={-62}
                      width="100%"
                      padding="0 60px"
                    />
                  )}
                  {!dropDown && <Ranking data={ranking} />}
                </div>
              </StyledMainContentWrapper>
              <StyledBannerWrapper>
                <Banner
                  imgUrl={banners?.data?.typeA}
                  {...bannerProps}
                  width={"160px"}
                  height={"600px"}
                />
                <Banner
                  imgUrl={banners?.data?.typeA}
                  {...bannerProps}
                  width={"160px"}
                  height={"600px"}
                />
              </StyledBannerWrapper>
            </StyledDesktopOrLabtopWrapper>
          </>
        )}
      </StyledMainPage>
    </div>
  );
};

const StyledMainPage = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  text-align: center;
`;

const StyledMainContentWrapper = styled.div`
  width: 100%;
  min-width: 350px;
  margin: 0 50px;
`;

const StyledDesktopOrLabtopWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  min-width: 1500px;
`;

const StyledBannerWrapper = styled.div`
  height: 1500px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default MainPage;
