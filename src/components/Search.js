import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchImage from "../assets/search.png";
import useLocalStorage from "../hooks/useLocalStorage";
import { searchUsers } from "../redux/user";

const Search = ({ handleDropDown }) => {
  const [userName, setUserName] = useState("");
  const [searchedUsers, setLocalStorage] = useLocalStorage("searchedUsers", []);
  const dispatch = useDispatch();

  const handleUserName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (userName) {
        // dispatch(searchUsers(userName));
        setLocalStorage("searchedUsers", [...searchedUsers, userName]);
        setUserName("");
      }
    }
  };

  return (
    <StyledSearchWrapper>
      <StyledSearchInputWrapper type="text" placeholder="닉네임을 입력하세요">
        <StyledInput
          type="text"
          onFocus={() => {
            handleDropDown(true);
          }}
          onBlur={() => {
            handleDropDown(false);
          }}
          onChange={handleUserName}
          onKeyDown={handleSearch}
        ></StyledInput>
      </StyledSearchInputWrapper>
      <StyledSearchImage
        src={SearchImage}
        alt="search"
        onClick={() => {
          alert("!");
        }}
      />
    </StyledSearchWrapper>
  );
};

const StyledSearchWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const StyledSearchInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 0 15px;
  font-size: 15px;
  border-radius: 30px;
  border: 2.5px solid #6f42c1;
  background-color: #d9d9d9;

  &::placeholder {
    display: inline-block;
    color: #141414;
    padding-left: 15px;
  }
`;

const StyledInput = styled.input`
  background-color: none;
  padding: 0;
  border: none;
  background-color: #d9d9d9;
  width: 100%;
  height: 35px;
  outline: none;
  border: none;
  &:focus {
    outline: none;
  }
`;

const StyledSearchImage = styled.img`
  position: absolute;
  width: 17px;
  top: 17px;
  right: 15px;
`;

export default Search;
