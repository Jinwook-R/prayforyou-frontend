import styled from "@emotion/styled";
import MainLogoImage from "../assets/logo_1.png";

const StyledTitle = styled.div`
  width: 350px;
  height: 10vh;
`;

const StyledMainLogo = styled.div`
  width: 100%;
  height: 100%;
`;

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

export default Title;
