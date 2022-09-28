import styled from "@emotion/styled";
import titleImage from "../assets/logo_3.png";

const Header = () => {
  return (
    <StyledHeader>
      <img src={titleImage} alt="" />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  background-color: #775ee2;
  z-index: 10;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
`;

export default Header;
