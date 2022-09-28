import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import SearchImage from "../assets/search.png";
import useLocalStorage from "../hooks/useLocalStorage";
import { searchUser } from "../redux/user";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../utils/constants";

const Search = ({ handleDropDown }) => {
  const [userName, setUserName] = useState("");
  const [searchedUsers, setLocalStorage] = useLocalStorage("searchedUsers", []);
  const isDesktopOrLabtop = useMediaQuery({
    query: `(min-width: ${BREAK_POINT})`,
  });
  const isTabletOrMobile = useMediaQuery({
    query: `(min-width: ${BREAK_POINT})`,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (userName) {
        (async () => {
          const dispatchResponse = await dispatch(searchUser(userName));
          if (!!dispatchResponse?.payload?.length) {
            const filteredNickname = dispatchResponse.payload.filter(
              (item) => item?.nickname === userName
            );

            if (filteredNickname.length === 1) {
              setLocalStorage("searchedUsers", [...searchedUsers, userName]);
              setUserName("");
              navigate("user", { state: { ...filteredNickname[0] } });
            }
          }
        })();
      }
    }
  };

  return (
    <StyledSearchWrapper>
      <StyledSearchInputWrapper type="text">
        <StyledInput
          className="searchInput"
          placeholder="닉네임을 입력하세요"
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
      {isTabletOrMobile && (
        <StyledSearchImage
          className="searchImage"
          src={SearchImage}
          alt="search"
          onClick={handleSearch}
        />
      )}
      {isDesktopOrLabtop && (
        <StyledPrayForYouNav
          className="pray-for-you-nav"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span style={{ color: "#141414", fontSize: "18px" }}>
            Pray For You가 무엇인가요?&nbsp;
          </span>
          <span style={{ color: "#775ee1" }} className="check-it-out">
            &nbsp;확인하러 가기👀
          </span>
        </StyledPrayForYouNav>
      )}
    </StyledSearchWrapper>
  );
};

const StyledSearchWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
  position: relative;
`;

const StyledSearchInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  padding: 0 15px;
  font-size: 15px;
  border-radius: 50px;
  border: 2.5px solid #775ee1;
  background-color: #f7f7f7;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  background-color: #f7f7f7;
  width: 100%;
  height: 35px;
  outline: none;
  border: none;
  margin-top: 7px;
  padding-left: 15px;
  font-size: 20px;
  &::placeholder {
    font-size: 20px;
    margin-top: 55px;
  }
  &:focus {
    outline: none;
  }
`;

const StyledSearchImage = styled.img`
  position: absolute;
  width: 25px;
  top: 22px;
  right: 35px;
`;

const StyledPrayForYouNav = styled.div`
  margin-top: 30px;
  margin-bottom: 100px;
  span {
    line-height: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default Search;
