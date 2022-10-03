import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import {
  StyledList,
  StyledListItemWrapper,
  StyledListItem,
  StyledListItemText,
} from "./wrapper";
import useLocalStorage from "../hooks/useLocalStorage";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../utils/constants";

const DropDown = ({ ...props }) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });
  const [searchedUsers] = useLocalStorage("searchedUsers", []);
  const [favoriteUsers] = useLocalStorage("favoriteUsers", []);

  const [recentSearchButtonToggle, setRecentSearchButtonToggle] =
    useState(true);
  const [favoriteButtonToggle, setFavoriteButtonToggle] = useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();
    setRecentSearchButtonToggle(!recentSearchButtonToggle);
    setFavoriteButtonToggle(!favoriteButtonToggle);
  };

  const handleUserCliked = (e) => {
    console.log(e.currentTarget);
  };

  const handleListItemWrapperClick = (e) => {};

  const renderList = useCallback(() => {
    const targetList = recentSearchButtonToggle ? searchedUsers : favoriteUsers;

    return targetList && targetList.length > 0 ? (
      <>
        {targetList.map((item, idx) => {
          return (
            <StyledListItemWrapper
              key={`${idx}`}
              marginBottom={isMobile ? "10px" : "16px"}
              borderRadius={isMobile && "15px"}
            >
              <StyledListItem height={"72px"}>
                <StyledListItemText
                  flex={1}
                  textAlign="left"
                  fontSize={isMobile ? "15px" : "20px"}
                >
                  {item.nickname}
                </StyledListItemText>
                <StyledListItemText
                  textAlign="right"
                  fontSize={isMobile ? "12px" : "16px"}
                  color="#28252b"
                >
                  테스트 클랜
                </StyledListItemText>
              </StyledListItem>
            </StyledListItemWrapper>
          );
        })}
      </>
    ) : (
      <StyledListItemWrapper>
        <StyledListItem textAlign="left">
          <StyledListItemText
            textAlign="left"
            fontSize={isMobile ? "15px" : "20px"}
          >
            결과 없음
          </StyledListItemText>
        </StyledListItem>
      </StyledListItemWrapper>
    );
  }, [searchedUsers, favoriteUsers, recentSearchButtonToggle]);

  return (
    <div
      className="dropDown"
      style={{
        marginTop: "16px",
        borderRadius: "0 0 15px 15px",
        overflow: "hidden",
        ...props,
      }}
    >
      <div
        style={{
          display: "flex",
          borderRadius: "15px 15px 0 0",
          overflow: "hidden",
          border: "1px solid #b3b3b3",
          borderBottom: "0",
        }}
      >
        <StyledButton
          className="recentSearch"
          type="button"
          onClick={handleOnClick}
          style={{
            backgroundColor: recentSearchButtonToggle ? "#775ee1" : "#f7f7f7",
            color: recentSearchButtonToggle ? "white" : "black",
            fontSize: isMobile ? "12px" : "20px",
            height: isMobile ? "56px" : "75px",
          }}
          onMouseDown={(e) => e.preventDefault()}
        >
          최근 검색
        </StyledButton>
        <StyledButton
          className="favorite"
          type="button"
          onClick={handleOnClick}
          style={{
            backgroundColor: favoriteButtonToggle ? "#775ee1" : "#f7f7f7",
            color: favoriteButtonToggle ? "white" : "black",
            borderRadius: "0 15px 0 0",
            fontSize: isMobile ? "12px" : "20px",
            height: isMobile ? "56px" : "75px",
          }}
        >
          즐겨찾기 검색
        </StyledButton>
      </div>
      <StyledList
        onClick={handleUserCliked}
        borderRadius="0 0 15px 15px"
        padding={isMobile && "6px"}
      >
        {renderList()}
      </StyledList>
    </div>
  );
};

const StyledButton = styled.button`
  width: 50%;
  height: 75px;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

export default DropDown;
