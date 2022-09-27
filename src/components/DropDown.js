import styled from "@emotion/styled";
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useSelector } from "react-redux";
const DropDown = ({ dropDown }) => {
  const userList = useSelector((state) => state.user.users);
  console.log(userList);
  return (
    <div style={{ minHeight: "250px" }}>
      <div style={{ display: "flex" }}>
        <StyledButton type="">최근 검색</StyledButton>
        <StyledButton type="">즐겨찾기 검색</StyledButton>
      </div>
      <StyledList>
        {userList?.map((item, idx) => (
          <StyledListItem key={item.userId}>{item.nickname}</StyledListItem>
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
