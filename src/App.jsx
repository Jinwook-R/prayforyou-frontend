import React from "react";
import styled from "@emotion/styled";
import { Route, Routes } from "react-router";
import { useMediaQuery } from "react-responsive";
import { HomePage, UserPage } from "./views";
import { Header, Footer } from "./components";
import { BREAK_POINT } from "./utils/constants";
import { PrivatePage } from "./views/privatePage";
import { ClanPage } from "./views/clanPage";
import { LeaguePage } from "./views/league";

const MainWrapper = styled.div`
  width: 100%;
`;

function App() {
  // const isMobile = useMediaQuery({
  //   query: `(max-width: ${BREAK_POINT})`,
  // });
  // const isDesktop = useMediaQuery({
  //   query: `(min-width: ${BREAK_POINT})`,
  // });

  const Wrapper = styled.div`
    margin: 0 auto;
    max-width: ${(e) => {
      return false ? "750px" : "9600px";
    }};
    min-height: ${(e) => {
      return "100vh";
    }};
  `;

  return (
    <div className="App">
      {true && <Header />}
      <Wrapper>
        <MainWrapper>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/private" element={<PrivatePage />} />
            <Route path="/clan" element={<ClanPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/league" element={<LeaguePage />} />
          </Routes>
        </MainWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
