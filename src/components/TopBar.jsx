import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../utils/constants";
import useWindowSize from "../hooks/useWindowSize";

const TopBar = ({ nickname, battle, ...props }) => {
  const { battleStats } = battle;
  const { kill, death, gameCount, rate, updatedAt } = battleStats;
  const [width] = useWindowSize();

  const isDesktop = useMediaQuery({
    query: `(min-width: ${BREAK_POINT})`,
  });

  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  return (
    <>
      {isMobile && (
        <StyledTopBar height="70px" paddingTop="20px" {...props}>
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
                  }}
                >
                  별
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
                A보급 서플라이 리그
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
      {isDesktop && (
        <StyledTopBar
          height="100px"
          minWidth="1615px"
          justifyContents="center"
          display="flex"
        >
          <div
            style={{
              maxWidth: "1500px",
              width: "100%",
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
                }}
              >
                별
              </button>
            </div>
          </div>
        </StyledTopBar>
      )}
    </>
  );
};

const StyledTopBar = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  padding-top: ${(props) => props.paddingTop};
  margin: 0 auto;
  margin-bottom: 16px;
  background-color: #775ee1;
  color: white;
  box-shadow: 0 5px 10px #6852c6 inset;
  min-width: ${(props) => props.minWidth};
  justify-content: ${(props) => props.justifyContents};
  display: ${(props) => props.display};
`;

export default TopBar;
