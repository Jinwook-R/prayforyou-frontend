import styled from "@emotion/styled";

const StyledTitle = styled.div`
  width: 350px;
  height: 100px;
  background-image: url("../assets/logo_1.png");
  background-size: cover;
`;

const Title = () => {
  return <StyledTitle></StyledTitle>;
};

export default Title;
