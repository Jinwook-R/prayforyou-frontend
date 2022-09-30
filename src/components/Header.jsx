import styled from "@emotion/styled";
import titleImage from "../assets/logo_3.png";
import useWindowSize from "../hooks/useWindowSize";

const Header = ({ isMobile, height }) => {
  const [width] = useWindowSize();

  return (
    <StyledHeader
      justifyContents={"center"}
      padding={isMobile ? "0 20px" : ""}
      boxSizing={isMobile ? "border-box" : ""}
      height={height}
      width="100%"
      minWidth={isMobile ? "100%" : "1615px"}
    >
      <div
        style={{
          maxWidth: "1500px",
          width: "100%",
          height: height,
          display: "flex",
          justifyContent: isMobile ? "space-between" : "none",
          alignItems: "center",
        }}
      >
        <img
          src={titleImage}
          alt=""
          style={{ height: isMobile ? "30px" : "40px" }}
        />
        {isMobile && <StyledMapName>3 보급창고</StyledMapName>}
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContents};
  padding: ${(props) => props.padding};
  min-width: ${(props) => props.minWidth};
  box-sizing: ${(props) => props.boxSizing};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #775ee1;
  z-index: 10;
`;

const StyledMapName = styled.div`
  width: 120px;
  height: 40px;
  font-size: 20px;
  background-color: white;
  text-align: center;
  border-radius: 25px;
  line-height: 45px;
`;

export default Header;
