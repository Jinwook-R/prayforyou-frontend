import React from "react";
import styled from "@emotion/styled";
import { Route, Routes } from "react-router";
import MainPage from "./views/MainPage";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 350px;
  height: 90vh;
`;

const MainWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 80vh;
`;
function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Wrapper>
        <MainWrapper>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
          <Footer />
        </MainWrapper>
      </Wrapper>
    </div>
  );
}

export default App;
