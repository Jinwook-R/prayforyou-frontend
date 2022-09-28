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
  height: 50px;
  display: flex;
  background-color: #6f42c1;
  border: 0 1px 9px 0 rgb(30 30 30 / 60%);
`;

export default Header;
