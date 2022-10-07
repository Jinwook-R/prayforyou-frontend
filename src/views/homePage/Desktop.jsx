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
  StyledButtonWrapper,
} from "../../components/wrapper";
import { fetchAllBanners } from "../../redux/banner/bannerSlice";
import { fetchAllRanking } from "../../redux/ranking/rankingSlice";
import { useNavigate } from "react-router";
import { InfoFieldItem, MatchListItem } from "../../components/listItem";
import styled from "@emotion/styled";
import { useInfinite } from "../../hooks";
import { getUserRecords } from "../../redux/record";
import { resetStore } from "../../redux/store";

const bannerProps = {
  width: "100%",
  height: "100px",
  marginBottom: "16px",
};

const Desktop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchAllBanners());
    // dispatch(fetchAllRanking());
  }, []);

  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = (value) => {
    setDropDown(value);
  };

  const [filteredUserNames, setFilteredUserNames] = useState([]);
  const [userName, setUserName] = useState("");

  const { content, status, isEnd } = useSelector((store) => store.userRecords);

  const { loadNextPage, slicedData, pageCount } = useInfinite({
    data: content,
    isSuccess: status === "succeeded",
    isAsync: true,
  });

  useEffect(() => {
    dispatch(getUserRecords({ userNexonId: "100942704", page: pageCount }));
    return () => {
      dispatch(resetStore());
    };
  }, [pageCount, dispatch]);

  return (
    <StyledDesktopWrapper>
      <StyledMainContentWrapper style={{ paddingInline: "50px" }}>
        <Title
          width="380px"
          height="80px"
          marginBottom="50px"
          marginTop={"130px"}
        />
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
          {dropDown && userName !== "" && !!filteredUserNames.length && (
            <div
              style={{
                position: "absolute",
                top: "90px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StyledList
                width={"750px"}
                padding={"16px 30px"}
                onClick={(e) => {
                  // console.log(e.target);
                }}
              >
                {dropDown &&
                  userName &&
                  filteredUserNames.map((item, idx) => (
                    <StyledListItemWrapper
                      key={`${idx}`}
                      marginBottom={"16px"}
                      borderRadius={"15px"}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/record/${item.userNexonId}`);
                      }}
                    >
                      <StyledListItem
                        justifyContent={"spaceBetween"}
                        width={"100%"}
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
                          {item?.clanName}
                        </StyledListItemText>
                      </StyledListItem>
                    </StyledListItemWrapper>
                  ))}
              </StyledList>
            </div>
          )}
        </div>
        <StyledDesktopWrapper>
          <StyledMainContentWrapper>
            <div style={{ display: "flex", marginTop: "49px", gap: "117px" }}>
              <div style={{ overflow: "auto" }}>
                <div style={{ marginBottom: "10px" }}>
                  <DesktopContainer>
                    {(slicedData || []).map((match) => (
                      <MatchListItem key={match.matchId} matchData={match} />
                    ))}
                  </DesktopContainer>
                </div>
                {!isEnd && (
                  <StyledButtonWrapper
                    onClick={loadNextPage}
                    height={"80px"}
                    justifyContent={"center"}
                    style={{
                      width: "100%",
                      marginTop: "20px",
                      alignItems: "center",
                      background: "#775ee2",
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    더보기
                  </StyledButtonWrapper>
                )}
              </div>
            </div>
          </StyledMainContentWrapper>
        </StyledDesktopWrapper>
      </StyledMainContentWrapper>
    </StyledDesktopWrapper>
  );
};
const DesktopContainer = styled.div`
  overflow: auto;
  > * + * {
    margin-top: 10px;
  }
`;
export default Desktop;
