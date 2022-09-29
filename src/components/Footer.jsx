import useState from "react";
import useWindowSize from "../hooks/useWindowSize";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../utils/constants";

const Footer = () => {
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });
  const [desktopWidth] = useWindowSize();
  return (
    <StyledFooter
      width={isTabletOrMobile ? "100%" : desktopWidth}
      minWidth={isTabletOrMobile ? "" : "1615px"}
    ></StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  height: 200px;
  background-color: #1e1839;
  color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
