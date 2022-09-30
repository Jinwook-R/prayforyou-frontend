import React from "react";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../../utils/constants";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const UserPage = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${BREAK_POINT})`,
  });

  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });

  return (
    <>
      {isMobile && <Mobile />}
      {isDesktop && <Desktop />}
    </>
  );
};

export default UserPage;
