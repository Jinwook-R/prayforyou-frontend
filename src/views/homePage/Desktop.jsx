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
import {
  StyledList,
  StyledListItemWrapper,
  StyledListItem,
  StyledListItemText,
} from "../../components/wrapper";
import { fetchAllBanners } from "../../redux/banner/bannerSlice";
import { fetchAllRanking } from "../../redux/ranking/rankingSlice";

const bannerProps = {
  width: "100%",
  height: "100px",
  marginBottom: "16px",
};

const Desktop = () => {
  const banners = useSelector((store) => store.banner);
  //const ranking = useSelector((store) => store.ranking.ranking);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBanners());
    dispatch(fetchAllRanking());
  }, []);

  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = (value) => {
    setDropDown(value);
  };

  const [filteredUserNames, setFilteredUserNames] = useState([]);
  const [userName, setUserName] = useState("");

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
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Search
            height="90px"
            handleDropDown={handleDropDown}
            setFilteredUserNames={setFilteredUserNames}
            setUserName={setUserName}
            userName={userName}
            dropDown={dropDown}
          />
          {dropDown && userName !== "" && (
            <>
              <StyledList width={"80%"} padding={"16px 30px"}>
                {dropDown &&
                  userName &&
                  filteredUserNames.map((item, idx) => (
                    <StyledListItemWrapper
                      key={`${idx}`}
                      marginBottom={"16px"}
                      borderRadius={"15px"}
                    >
                      <StyledListItem
                        justifyContent={"spaceBetween"}
                        height={"72px"}
                      >
                        <StyledListItemText
                          flex={1}
                          textAlign="left"
                          fontSize={"20px"}
                        >
                          {item.nickname}
                        </StyledListItemText>
                        <StyledListItemText
                          flex={1}
                          textAlign="right"
                          fontSize={"20px"}
                        >
                          {/* 클랜명 들어가야함. */}
                          {"클랜 명"}
                        </StyledListItemText>
                      </StyledListItem>
                    </StyledListItemWrapper>
                  ))}
              </StyledList>
            </>
          )}
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
    </StyledDesktopWrapper>
  );
};

export default Desktop;
