import React from "react";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import { StyledMainPageWrapper } from "../../components";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const HomePage = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${BREAK_POINT})`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });
  return (
    <>
      <StyledMainPageWrapper>
        {isDesktop && <Desktop />}
        {isMobile && <Mobile />}
      </StyledMainPageWrapper>
    </>
  );
};

export default HomePage;
