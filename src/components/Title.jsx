import styled from "@emotion/styled";
import MainLogoImage from "../assets/logo_1.png";

const Title = () => {
  return (
    <StyledTitle>
      <img
        src={MainLogoImage}
        alt="logo"
        style={{
          maxWidth: "180px",
        }}
      />
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  margin: 0 auto;
  margin-bottom: 16px;
`;

export default Title;
