import styled from "@emotion/styled";
import titleImage from "../assets/logo_3.png";
import useWindowSize from "../hooks/useWindowSize";

const Header = ({ minWidth, height = "35px" }) => {
  const [width] = useWindowSize();

  return (
    <StyledHeader height={height} width={width}>
      <div
        style={{
          maxWidth: "1500px",
          width: "100%",
          height: height,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={titleImage} alt="" style={{ height: "35px" }} />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  min-width: 1615px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  background-color: #775ee1;
  z-index: 10;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
`;

export default Header;
