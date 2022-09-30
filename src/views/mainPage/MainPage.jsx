import React from "react";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import { StyledMainPageWrapper } from "../../components";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const MainPage = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${BREAK_POINT})`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });
  return (
    <div>
      <StyledMainPageWrapper>
        {isDesktop && <Desktop />}
        {isMobile && <Mobile />}
      </StyledMainPageWrapper>
    </div>
  );
};

export default MainPage;
