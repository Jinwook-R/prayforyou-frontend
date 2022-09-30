import styled from "@emotion/styled";
import React, { useState } from "react";
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
        {recentSearchButtonToggle &&
          (searchedUsers.length ? (
            searchedUsers.map((item, idx) => (
              <StyledListItemWrapper>
                <StyledListItem key={`${idx}`}>
                  <StyledListItemText textAlign="left">
                    {item.nickname}
                  </StyledListItemText>
                  <StyledListItemText
                    textAlign="right"
                    fontSize="15px"
                    color="#59575b"
                  >
                    A보급 서플라이 리그 테스크클랜
                  </StyledListItemText>
                </StyledListItem>
              </StyledListItemWrapper>
            ))
          ) : (
            <StyledListItemWrapper>
              <StyledListItem textAlign="left">
                <p>결과 없음</p>
              </StyledListItem>
            </StyledListItemWrapper>
          ))}
        {favoriteButtonToggle &&
          (favoriteUsers.length ? (
            favoriteUsers.map((item, idx) => (
              <StyledListItemWrapper>
                <StyledListItem key={`${idx}`}>
                  <StyledListItemText textAlign="left">
                    {item.nickname}
                  </StyledListItemText>
                  <StyledListItemText
                    textAlign="right"
                    fontSize="15px"
                    color="#59575b"
                  >
                    A보급 서플라이 리그 테스크클랜
                  </StyledListItemText>
                </StyledListItem>
              </StyledListItemWrapper>
            ))
          ) : (
            <StyledListItemWrapper>
              <StyledListItem textAlign="left">
                <p>결과 없음</p>
              </StyledListItem>
            </StyledListItemWrapper>
          ))}
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
