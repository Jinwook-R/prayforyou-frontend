import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const TopBar = ({ userInfo, showButton = true, ...props }) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  const navigate = useNavigate();
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
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {userInfo?.name || ""}
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "20px", marginTop: "20px" }}
                >
                  <div style={{ fontSize: "16px" }}>
                    {userInfo?.clanName || "-"}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {showButton && (
                  <SearchInputWrapper width={"100px"}>
                    <StyledButton
                      style={{
                        fontSize: "13px",
                        height: "30px",
                      }}
                      onClick={() => {
                        navigate(`/private/${userInfo.userNexonId}`);
                      }}
                    >
                      ????????? ??????
                    </StyledButton>
                  </SearchInputWrapper>
                )}
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
                {userInfo?.name || ""}
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
              <div style={{ fontWeight: "bold" }}>
                {userInfo?.clanName || "-"}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {showButton && (
              <SearchInputWrapper>
                <StyledButton
                  onClick={() => {
                    navigate(`/private/${userInfo.userNexonId}`);
                  }}
                >
                  ????????? ??????
                </StyledButton>
              </SearchInputWrapper>
            )}
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
  width: ${(props) => props.width || "150px"};
  color: white;
  font-size: 24px;
  border-radius: 50px;
  border: 2px solid white;
  background-color: transparent;
`;

export default TopBar;
