import React from "react";
import styled from "@emotion/styled";
import { Route, Routes } from "react-router";
import {
  HomePage,
  UserPage,
  PrivatePage,
  ClanPage,
  LeaguePage,
  RecordPage,
} from "./views";
import { Header, Footer } from "./components";
import { ClanDetailPage } from "./views/clanDetailPage";

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
            <Route exact path="/record/:userId" element={<PrivatePage />} />
            <Route exact path="/clan" element={<ClanPage />} />
            <Route exact path="/user" element={<UserPage />} />
            <Route exact path="/league" element={<LeaguePage />} />
            <Route path="/record/:userNexonId" element={<RecordPage />} />
            <Route path="/clan/:clanId" element={<ClanDetailPage />} />
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
