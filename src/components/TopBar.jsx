import styled from "@emotion/styled";
import useLocalStorage from "../hooks/useLocalStorage";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as Medal } from "../assets/mvp_medal.svg";
import {
  BREAK_POINT,
  COMMON_LAYOUT_PC_HORIZONTAL_MAX,
} from "../utils/constants";

const TopBar = ({ userId, nickname, battle, ...props }) => {
  const { battleStats } = battle;
  const { kill, death, gameCount } = battleStats;
  const [favoriteUsers, setFavoriteUsers] = useLocalStorage(
    "favoriteUsers",
    []
  );

  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  const handleOnClick = () => {
    if (
      favoriteUsers.length &&
      favoriteUsers.map((user) => Object.keys(user).includes(userId))
    ) {
      return;
    }

    favoriteUsers.map((user) => Object.keys(user).includes(userId)) &&
      setFavoriteUsers("favoriteUsers", [
        ...favoriteUsers,
        { userId, nickname },
      ]);
    alert("즐겨찾기에 추가되었습니다.");
  };

  return (
    <>
      {isMobile && (
        <StyledTopBar
          height="70px"
          paddingTop="20px"
          boxShadow="0 5px 10px #6852c6 inset"
          backgroundColor="#775ee1"
          inset
          {...props}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "80%",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "flex",
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
                  flexGrow: 0,
                  flexShrink: 0,
                  flexBasis: "50%",
                  textAlign: "right",
                }}
              >
                <button
                  style={{
                    width: "65px",
                    height: "30px",
                    borderRadius: "15px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: favoriteUsers.includes(userId)
                      ? "#f5f5f5"
                      : "#ffffff",
                  }}
                  onClick={handleOnClick}
                >
                  {favoriteUsers.length &&
                  favoriteUsers.map((user) =>
                    Object.keys(user).includes(userId)
                  ) ? (
                    <i class="fa fa-star"></i>
                  ) : (
                    <i class="fa-regular fa-star"></i>
                  )}
                </button>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  flexBasis: "60%",
                }}
              >
                테스트 클랜
              </p>
              <div
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  flexBasis: "40%",
                  display: "flex",
                }}
              >
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    flexBasis: "50%",
                    textAlign: "right",
                  }}
                >
                  킬뎃 {Math.floor((kill / (kill + death)) * 100)}%{" "}
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    flexBasis: "50%",
                    textAlign: "right",
                  }}
                >
                  판킬 {Math.floor(kill / gameCount)}{" "}
                </p>
              </div>
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
          padding="0 20px"
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
  max-width: ${COMMON_LAYOUT_PC_HORIZONTAL_MAX};
  background-color: #775ee1;
  color: white;
  box-shadow: ${(props) => props.boxShadow};
  justify-content: ${(props) => props.justifyContents};
  display: ${(props) => props.display};
`;

export default TopBar;
