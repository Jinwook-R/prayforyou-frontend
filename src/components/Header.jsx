import styled from "@emotion/styled";
import titleImage from "../assets/logo_3.png";

const Header = ({ minWidth, height = "35px" }) => {
  return (
    <StyledHeader style={{ height: height, minWidth: minWidth }}>
      <div
        style={{
          width: "100%",
          maxWidth: "1500px",
          minWidth: "350px",
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
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  background-color: #775ee1;
  z-index: 10;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
`;

export default Header;
