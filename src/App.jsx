import React from "react";
import styled from "@emotion/styled";
import { Route, Routes } from "react-router";
import { useMediaQuery } from "react-responsive";
import { MainPage, UserPage } from "./views";
import Footer from "./components/Footer";

const MainWrapper = styled.div`
  width: 100%;
`;

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 750px)" });
  const isDesktopOrLabtop = useMediaQuery({ query: "(min-width: 750px)" });
  console.log(isTabletOrMobile);
  const Wrapper = styled.div`
    margin: 0 auto;
    max-width: ${(e) => {
      return isTabletOrMobile ? "750px" : "1400px";
    }};
  `;

  return (
    <div className="App">
      <Wrapper>
        <MainWrapper>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </MainWrapper>
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
