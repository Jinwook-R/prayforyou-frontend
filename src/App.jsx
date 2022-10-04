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
            <Route path="/record" element={<RecordPage />} />
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
