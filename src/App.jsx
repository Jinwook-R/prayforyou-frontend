import React from "react";
import styled from "@emotion/styled";
import { Route, Routes } from "react-router";
import { useMediaQuery } from "react-responsive";
import { MainPage, UserPage } from "./views";
import { Header, Footer } from "./components";
import { BREAK_POINT } from "./utils/constants";

const MainWrapper = styled.div`
  width: 100%;
`;

function App() {
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });
  const isDesktopOrLabtop = useMediaQuery({
    query: `(min-width: ${BREAK_POINT})`,
  });
  const Wrapper = styled.div`
    margin: 0 auto;
    max-width: ${(e) => {
      return isTabletOrMobile ? "750px" : "2000px";
    }};
    min-width: ${(e) => {
      return isDesktopOrLabtop && "1250px";
    }};
  `;

  return (
    <div className="App">
      {isDesktopOrLabtop && <Header height="100px" minWidth="1250px" />}
      <Wrapper>
        <MainWrapper>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </MainWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
