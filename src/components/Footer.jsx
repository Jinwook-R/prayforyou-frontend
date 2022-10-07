import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../utils/constants";

const Footer = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });
  return (
    <StyledFooter
      height={isMobile ? "auto" : "180px"}
      style={{ padding: isMobile ? "60px 15px 29px 15px" : "40px 144px" }}
    >
      Created By @TeamPrayforYou
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height || "auto"};
  padding: 40px 144px;
  background-color: #1e1839;
  color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: right;
  font-size: 17px;
  line-height: normal;
  text-overflow: ellipsis;
  white-space: break-spaces;
  font-family: AppleSystemUIFont;
`;

export default Footer;
