import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as Medal } from "../assets/mvp_medal.svg";
import { BREAK_POINT } from "../utils/constants";
import ranking from "./Ranking";

const ClanDetailTopBar = ({
  userId,
  nickname,
  clanLevel,
  ranking,
  winCount,
  loseCount,
  openKaKaoLink,
  ...props
}) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

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
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
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
                  {nickname || ""}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "white",
                  }}
                ></div>
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
                <div>{`P4U???????????? - ${clanLevel || "-"} - ${
                  ranking || "-"
                }???`}</div>
              </div>
            </div>
            {openKaKaoLink && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <SearchInputWrapper heght={"40px"}>
                  <StyledButton
                    style={{
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "13px",
                      }}
                      href={openKaKaoLink}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      ?????????
                    </a>
                  </StyledButton>
                </SearchInputWrapper>
              </div>
            )}
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
                {nickname || ""}
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <div>{`P4U???????????? - ${clanLevel || "-"} - ${
                ranking || "-"
              }???`}</div>
            </div>
          </div>
          {openKaKaoLink && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <SearchInputWrapper>
                <StyledButton>
                  <a
                    style={{ color: "white", textDecoration: "none" }}
                    href={openKaKaoLink}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    ???????????? ????????????
                  </a>
                </StyledButton>
              </SearchInputWrapper>
            </div>
          )}
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
  margin-inline: 10px;
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
  color: white;
  font-size: 24px;
  border-radius: 50px;
  border: 2px solid white;
  background-color: transparent;
`;

export default ClanDetailTopBar;
