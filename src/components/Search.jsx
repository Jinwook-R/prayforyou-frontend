import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
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
        (async () => {
          const dispatchResponse = await dispatch(searchUsers(userName));
          if (!!dispatchResponse?.payload?.length) {
            const filteredNickname = dispatchResponse.payload.filter(
              (item) => item?.nickname === userName
            );

            if (filteredNickname.length) {
              setLocalStorage("searchedUsers", [...searchedUsers, userName]);
            }
          }
        })();
        setUserName("");
      }
    }
  };

  return (
    <StyledSearchWrapper>
      <StyledSearchInputWrapper type="text" placeholder="닉네임을 입력하세요">
        <StyledInput
          className="searchInput"
          type="text"
          onBlur={(e) => {
            if (!e.target.className.includes("searchWrapper")) {
              handleDropDown(false);
            }
          }}
          onFocus={(e) => {
            handleDropDown(true);
          }}
          onChange={handleUserName}
          onKeyDown={handleSearch}
        />
      </StyledSearchInputWrapper>
      <StyledSearchImage
        className="searchImage"
        src={SearchImage}
        alt="search"
        onClick={handleSearch}
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
