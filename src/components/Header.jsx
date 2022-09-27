import styled from "@emotion/styled";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #6f42c1;
`;

export default Header;
