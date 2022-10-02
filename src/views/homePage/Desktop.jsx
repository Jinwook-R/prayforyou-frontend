import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyledDesktopWrapper,
  StyledBannerWrapper,
  StyledMainContentWrapper,
  Title,
  Ranking,
  DropDown,
  Banner,
  Search,
} from "../../components";
import { fetchAllBanners } from "../../redux/banner/bannerSlice";
import { fetchAllRanking } from "../../redux/ranking/rankingSlice";
const bannerProps = {
  width: "100%",
  height: "100px",
  marginBottom: "16px",
};

const Desktop = () => {
  const banners = useSelector((store) => store.banner);
  const ranking = useSelector((store) => store.ranking.ranking);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBanners());
    dispatch(fetchAllRanking());
  }, []);

  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = (value) => {
    setDropDown(value);
  };

  return (
    <StyledDesktopWrapper>
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
      <StyledMainContentWrapper style={{ paddingInline: "50px" }}>
        <Title width="280px" marginBottom="50px" marginTop={"130px"} />
        <div
          onMouseDown={(e) => {
            if (!e.target.className.includes("searchInput")) {
              e.preventDefault();
            }
          }}
          style={{ position: "relative" }}
        >
          <Search height="90px" handleDropDown={handleDropDown} />
          {dropDown && (
            <DropDown
              position="absolute"
              top={73}
              left={0}
              width="100%"
              padding="0 30px"
            />
          )}
        </div>
        {!dropDown && ranking && <Ranking data={ranking} />}
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
    </StyledDesktopWrapper>
  );
};

export default Desktop;