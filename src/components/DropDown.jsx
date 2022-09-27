import styled from "@emotion/styled";
import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

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
    <div className="dropDown" style={{ minHeight: "250px", marginTop: "16px" }}>
      <div style={{ display: "flex" }}>
        <StyledButton
          className="recentSearch"
          type="button"
          onClick={handleOnClick}
          style={{
            backgroundColor: recentSearchButtonToggle ? "#6f42c1" : "white",
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
            backgroundColor: favoriteButtonToggle ? "#6f42c1" : "white",
            color: favoriteButtonToggle ? "white" : "black",
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
  height: 30px;
  border: none;
`;

const StyledList = styled.div`
  width: 100%;
  min-height: 250px;
  background-color: #6f42c1;
  padding: 7px 0;
`;
const StyledListItem = styled.div`
  width: 250px;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 16px;
  border-radius: 5px;
  background-color: #e7e7e7;
`;

export default DropDown;
