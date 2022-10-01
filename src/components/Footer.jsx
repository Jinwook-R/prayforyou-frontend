import useState from "react";
import useWindowSize from "../hooks/useWindowSize";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../utils/constants";

const Footer = () => {
  // const isMobile = useMediaQuery({
  //   query: `(max-width: ${BREAK_POINT})`,
  // });
  // const [desktopWidth] = useWindowSize();
  return (
      <StyledFooter>
          Privacy Policy
          <br/>
          © 2012-2022 OP.GG. OP.GG isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends.
          <br />
        League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
      </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: ${(props) => props.width};
  height: 216px;
  padding: 40px 144px;
  background-color: #1e1839;
  color: #d9d9d9;
  font-size: 11px;
  line-height: normal;
  font-family: AppleSystemUIFont;
`;

export default Footer;
