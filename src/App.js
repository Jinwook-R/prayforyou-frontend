import React from "react";
import styled from "@emotion/styled";
import { Route, Routes } from "react-router";
import MainPage from "./views/MainPage";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 350px;
  height: 750px;
  background-color: dodgerblue;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
