import styled from "@emotion/styled";
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const DropDown = ({ dropDown }) => {
  const [searchedUsers, setLocalStorage] = useLocalStorage("searchedUsers", []);

  return (
    <div style={{ minHeight: "250px" }}>
      <div style={{ display: "flex" }}>
        <StyledButton type="">최근 검색</StyledButton>
        <StyledButton type="">즐겨찾기 검색</StyledButton>
      </div>
      <StyledList>
        {searchedUsers.map((item, idx) => (
          <StyledListItem key={`${idx}`}>{item}</StyledListItem>
        ))}
      </StyledList>
    </div>
  );
};

const StyledButton = styled.button`
  width: 50%;
  height: 30px;
  background-color: white;
  color: black;
  border: none;
`;

const StyledList = styled.div`
  width: 100%;
  background-color: #6f42c1;
`;
const StyledListItem = styled.div`
  width: 250px;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 7px;
  border-radius: 5px;
  background-color: #e7e7e7;
`;

export default DropDown;
