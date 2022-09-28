import React from "react";
import { useEffect } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { Title, Search, DropDown, Banner, Header } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBanners } from "../redux/banner/bannerSlice";
import styled from "@emotion/styled";

const bannerProps = {
  width: "100%",
  height: "100px",
  marginBottom: "16px",
};

const MainPage = () => {
  const banners = useSelector((store) => store.banner);
  const dispatch = useDispatch();
  const isDesktopOrLabtop = useMediaQuery({ query: "(min-width: 980px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 980px)" });

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
                <div style={{ width: "100%", minHeight: "250px" }} />
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
                >
                  <Search handleDropDown={handleDropDown} />
                  {dropDown && <DropDown />}
                  {!dropDown && <div />}
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
`;

const StyledBannerWrapper = styled.div`
  height: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default MainPage;
