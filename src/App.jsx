import React from "react";
import styled from "@emotion/styled";
import { Route, Routes } from "react-router";
import { HomePage, UserPage } from "./views";
import { Header, Footer } from "./components";
import { PrivatePage } from "./views/privatePage";
import { ClanPage } from "./views/clanPage";
import { LeaguePage } from "./views/leaguePage";

const MainWrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <div className="App">
      <Header />
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
const Wrapper = styled.div`
  margin: 0 auto;

  min-height: ${(e) => {
    return "100vh";
  }};
`;
export default App;
