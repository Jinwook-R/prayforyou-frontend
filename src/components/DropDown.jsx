import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import {
  StyledList,
  StyledListItemWrapper,
  StyledListItem,
  StyledListItemText,
} from "./wrapper";
import useLocalStorage from "../hooks/useLocalStorage";

const DropDown = ({ ...props }) => {
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
            <StyledListItemWrapper key={`${idx}`}>
              <StyledListItem>
                <StyledListItemText flex={1} textAlign="left" fontSize="20px">
                  {item.nickname}
                </StyledListItemText>
                <StyledListItemText
                  textAlign="right"
                  fontSize="16px"
                  color="#000"
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
          <StyledListItemText textAlign="left" fontSize="20px">
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
          }}
        >
          즐겨찾기 검색
        </StyledButton>
      </div>
      <StyledList onClick={handleUserCliked} borderRadius="0 0 15px 15px">
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
