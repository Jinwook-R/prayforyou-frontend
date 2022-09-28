import styled from "@emotion/styled";
import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import List from "./List";

const DropDown = () => {
  const [searchedUsers] = useLocalStorage("searchedUsers", []);
  const [recentSearchButtonToggle, setRecentSearchButtonToggle] =
    useState(true);
  const [favoriteButtonToggle, setFavoriteButtonToggle] = useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();
    setRecentSearchButtonToggle(!recentSearchButtonToggle);
    setFavoriteButtonToggle(!favoriteButtonToggle);
  };

  return (
    <div
      className="dropDown"
      style={{
        minHeight: "250px",
        marginTop: "16px",
        padding: "0 60px",
        boxSizing: "border-box",
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
      <StyledList>
        {recentSearchButtonToggle &&
          searchedUsers.map((item, idx) => (
            <StyledListItem key={`${idx}`}>{item}</StyledListItem>
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

const StyledList = styled.div`
  width: 100%;
  min-height: 350px;
  background-color: #775ee1;
  padding: 20px 0;
`;

const StyledListItem = styled.div`
  width: 95%;
  height: 70px;
  margin: 0 auto;
  margin-bottom: 12px;
  border-radius: 12px;
  background-color: #f7f7f7;
  cursor: pointer;
`;

export default DropDown;
