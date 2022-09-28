import React from "react";
import styled from "@emotion/styled";
import { Route, Routes } from "react-router";
import { MainPage, UserPage } from "./views";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 360px;
`;

const MainWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
`;
function App() {
  return (
    <div className="App">
      <Wrapper>
        <MainWrapper>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
          <Footer />
        </MainWrapper>
      </Wrapper>
    </div>
  );
}

export default App;
