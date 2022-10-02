import styled from "@emotion/styled";
import MainLogoImage from "../assets/logo_1.png";

const Title = ({ ...props }) => {
  return (
    <StyledTitle {...props}>
      <img
        src={MainLogoImage}
        alt=""
        style={{ height: "auto", display: "block", maxWidth: "100%" }}
      />
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  margin: 0 auto;
  width: ${(props) => props.width};
  height: 60px;
  overflow: hidden;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`;

export default Title;
