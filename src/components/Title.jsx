import styled from "@emotion/styled";
import MainLogoImage from "../assets/logo_1.png";

const Title = () => {
  return (
    <StyledTitle>
      <img
        src={MainLogoImage}
        alt="logo"
        style={{
          paddingTop: "3.6vh",
          maxWidth: "180px",
          paddingBottom: "2.6vh",
        }}
      />
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  margin: 0 auto;
  height: 75px;
`;

const StyledMainLogo = styled.div`
  width: 100%;
  height: 100%;
`;

export default Title;
