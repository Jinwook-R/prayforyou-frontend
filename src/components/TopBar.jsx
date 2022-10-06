import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useLocalStorage from "../hooks/useLocalStorage";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as Medal } from "../assets/mvp_medal.svg";
import {
  BREAK_POINT,
  COMMON_LAYOUT_PC_HORIZONTAL_MAX,
} from "../utils/constants";
import { Toggle } from "./common";

const TopBar = ({ userId, nickname, battle, ...props }) => {
  const { battleStats } = battle;
  const { kill, death, gameCount } = battle.battleStats;
  const [favoriteUsers, setFavoriteUsers] = useLocalStorage(
    "favoriteUsers",
    []
  );

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isFavorite =
      favoriteUsers?.some((user) => user.userId === userId) ?? false;
    setIsFavorite(isFavorite);
  }, [favoriteUsers]);

  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  const handleOnClick = () => {
    if (!favoriteUsers.length) {
      setFavoriteUsers("favoriteUsers", [
        ...favoriteUsers,
        { userId, nickname },
      ]);
      return;
    }

    const filteredFavoriteUsers = favoriteUsers.filter(
      (user) => user.userId !== userId
    );
    setFavoriteUsers(
      "favoriteUsers",
      filteredFavoriteUsers.length === favoriteUsers.length
        ? [...filteredFavoriteUsers, { userId, nickname }]
        : [...filteredFavoriteUsers]
    );
  };

  return (
    <>
      {isMobile && (
        <StyledTopBar
          height="98px"
          boxShadow="0 5px 10px #6852c6 inset"
          backgroundColor="#775ee1"
          style={{ paddingTop: "16px", paddingInline: "30px" }}
          inset
          {...props}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  flexBasis: "50%",
                  textAlign: "left",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {nickname}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "white",
                }}
              >
                <div>
                  <span>{`${"스나이퍼"}`}</span>
                </div>
                {/*<Toggle
                  onClick={handleOnClick}
                  style={{ width: "54px", height: "30px", cursor: "pointer" }}
                  toggled={isFavorite}
                />*/}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
                fontSize: "16px",
              }}
            >
              <div>테스트 클랜</div>
              <div style={{ fontWeight: "bold" }}>{`킬뎃 ${(
                (kill * 100) /
                (kill + death)
              ).toFixed(1)}%  판킬 ${(kill / gameCount).toFixed(2)}`}</div>
            </div>
          </div>
        </StyledTopBar>
      )}
      {!isMobile && (
        <StyledTopBar
          height="138px"
          justifyContents="space-between"
          alignItems="center"
          display="flex"
          {...props}
        >
          <div>
            <div
              style={{
                width: "100%",
                display: "flex",
                paddingTop: "20px",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                {nickname}
              </div>
              <div
                style={{
                  fontSize: "16px",
                }}
              >
                {`승률 ${100}%`}
              </div>
              <div
                style={{
                  fontSize: "16px",
                }}
              >
                {`${5}회`}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  marginLeft: "10px",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Medal width={"20px"} height={"20px"} />
                {`${5}회`}
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <div style={{ fontWeight: "bold" }}>테스트 클랜</div>
              <div>{`킬뎃 ${38.2}% 판킬 ${11}`}</div>
              <div>{`${114}위/${4000}명`}</div>
              <div>{`래더점수 ${371}점`}</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchInputWrapper>
              <StyledButton onChange={() => {}}>맵으로</StyledButton>
            </SearchInputWrapper>
          </div>
        </StyledTopBar>
      )}
    </>
  );
};

const StyledTopBar = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-top: ${(props) => props.paddingTop};
  margin-bottom: 16px;
  max-width: 1632px;
  background-color: #775ee1;
  color: white;
  box-shadow: ${(props) => props.boxShadow};
  justify-content: ${(props) => props.justifyContents};
  display: ${(props) => props.display};
  padding: 0 16px;
`;
const StyledButton = styled.button`
  background-color: transparent;
  width: 100%;
  height: 70px;
  outline: none;
  color: white;
  border: none;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height};
  box-sizing: border-box;
  width: 150px;
  color: white;
  font-size: 24px;
  border-radius: 50px;
  border: 2px solid white;
  background-color: transparent;
`;

export default TopBar;
