import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useLocalStorage from "../hooks/useLocalStorage";
import { searchUserByName } from "../redux/user";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { BREAK_POINT } from "../utils/constants";
import styled from "@emotion/styled";
import useDispatchDebounce from "../hooks/useDispatchDebounce";

const Search = ({
  dropDown,
  handleDropDown,
  userName,
  setUserName,
  setFilteredUserNames,
}) => {
  const [searchedUsers, setLocalStorage] = useLocalStorage("searchedUsers", []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [runSearchUser, clearRunSearchUser, searchedUserNames] =
    useDispatchDebounce(searchUserByName, 200, []);

  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  const handleUserName = async (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  useEffect(() => {
    (async () => {
      await runSearchUser(userName);
    })();
    return () => clearRunSearchUser;
  }, [userName]);

  useEffect(() => {
    setFilteredUserNames(searchedUserNames);
  }, [searchedUserNames]);

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      if (userName) {
        (async () => {
          const dispatchResponse = await dispatch(searchUserByName(userName));
          if (!!dispatchResponse?.payload?.length) {
            const filteredUser = dispatchResponse.payload.filter(
              (item) => item?.nickname === userName
            );

            if (filteredUser.length === 1) {
              if (searchedUsers.length > 0) {
                setLocalStorage("searchedUsers", [
                  ...searchedUsers.filter(
                    (user) => user.userNexonId !== filteredUser[0].userNexonId
                  ),
                  {
                    userNexonId: filteredUser[0].userNexonId,
                    nickname: filteredUser[0].nickname,
                    clanName: filteredUser[0].clanName,
                  },
                ]);
              } else {
                setLocalStorage("searchedUsers", [
                  {
                    userNexonId: filteredUser[0].userNexonId,
                    nickname: filteredUser[0].nickname,
                    clanName: filteredUser[0].clanName,
                  },
                ]);
              }

              setUserName("");
              navigate(`/record/${filteredUser[0].userNexonId}`);
            }
          }
        })();
      }
    }
  };

  return (
    <StyledSearchWrapper style={{ paddingInline: isMobile ? "32px" : "0" }}>
      <StyledSearchInputWrapper
        height={isMobile ? "50px" : "90px"}
        type="text"
        padding={isMobile ? "0 24px" : "0 64px"}
      >
        <StyledInput
          className="searchInput"
          placeholder="닉네임을 입력하세요"
          fontSize={isMobile ? "12px" : "24px"}
          type={isMobile ? "search" : "text"}
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
        {isMobile && <SearchIcon onClick={handleSearch} />}
      </StyledSearchInputWrapper>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "300px" }}>
          <StyledPrayForYouNav
            className="pray-for-you-nav"
            style={{
              display: "flex",
              justifyContent: "start",
              fontSize: isMobile ? "13px" : "20px",
            }}
            marginTop={isMobile ? "15px" : "40px"}
            marginBottom={isMobile ? "8px" : "10px"}
          >
            <a
              target={"_blank"}
              href="https://open.kakao.com/o/slcFiuFe"
              style={{ color: "#775ee1" }}
              rel="noreferrer"
            >
              리그 신청하러가기 &nbsp;
            </a>
            <div>👀</div>
          </StyledPrayForYouNav>
          <StyledPrayForYouNav
            className="pray-for-you-nav"
            style={{
              display: "flex",
              justifyContent: "start",
              fontSize: isMobile ? "13px" : "20px",
              marginTop: isMobile ? "10px" : "20px",
            }}
            marginBottom={"100px"}
          >
            <a
              target={"_blank"}
              href="https://docs.google.com/document/d/1p9xNOjsWjDDWXkZmQl7_-75uRcr3paci0a0aOOGeRJk/edit#"
              style={{ color: "#775ee1" }}
              rel="noreferrer"
            >
              리그 규칙 보러가기&nbsp;
            </a>
          </StyledPrayForYouNav>
        </div>
      </div>
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
  max-width: 844px;
  margin: 0 auto;
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
