import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useLocalStorage from "../hooks/useLocalStorage";
import { searchUser } from "../redux/user";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { BREAK_POINT } from "../utils/constants";
import styled from "@emotion/styled";

const Search = ({ dropDown, handleDropDown }) => {
  const [userName, setUserName] = useState("");
  const [searchedUsers, setLocalStorage] = useLocalStorage("searchedUsers", []);

  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
    handleDropDown(!!e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      if (userName) {
        (async () => {
          const dispatchResponse = await dispatch(searchUser(userName));
          if (!!dispatchResponse?.payload?.length) {
            const filteredUser = dispatchResponse.payload.filter(
              (item) => item?.nickname === userName
            );

            if (filteredUser.length === 1) {
              setLocalStorage("searchedUsers", [
                ...searchedUsers,
                {
                  userId: filteredUser[0].userId,
                  nickname: filteredUser[0].nickname,
                },
              ]);
              setUserName("");
              navigate("user", { state: { ...filteredUser[0] } });
            }
          }
        })();
      }
    }
  };

  return (
    <StyledSearchWrapper style={{ paddingInline: isMobile ? "32px" : "0" }}>
      <StyledSearchInputWrapper
        height={isMobile ? "50px" : "60px"}
        type="text"
        padding={isMobile ? "0 24px" : "0 64px"}
      >
        <StyledInput
          className="searchInput"
          placeholder="닉네임을 입력하세요"
          fontSize={isMobile ? "12px" : "24px"}
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
        {isMobile && <SearchIcon />}
      </StyledSearchInputWrapper>
      {!dropDown && (
        <StyledPrayForYouNav
          className="pray-for-you-nav"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: isMobile ? "13px" : "20px",
          }}
          marginTop={isMobile ? "15px" : "40px"}
          marginBottom={isMobile ? "8px" : "10px"}
        >
          <span style={{ color: "#141414" }}>
            Pray For You가 무엇인가요?&nbsp;
          </span>
          <span style={{ color: "#775ee1" }} className="check-it-out">
            &nbsp;확인하러 가기👀
          </span>
        </StyledPrayForYouNav>
      )}
      {!dropDown && (
        <StyledPrayForYouNav
          className="pray-for-you-nav"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: isMobile ? "13px" : "20px",
          }}
          marginBottom={"100px"}
        >
          <span style={{ color: "#141414" }}>Pray For You</span>
          <span style={{ color: "#775ee1" }} className="check-it-out">
            &nbsp;리그 신청하러가기🔫
          </span>
        </StyledPrayForYouNav>
      )}
    </StyledSearchWrapper>
  );
};

const StyledSearchWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

const StyledSearchInputWrapper = styled.div`
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
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
  font-size: ${(props) => props.fontSize || "24px"};
  &::placeholder {
    margin-top: 55px;
  }
  &:focus {
    outline: none;
  }
`;

const StyledPrayForYouNav = styled.div`
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  span {
    line-height: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default Search;
