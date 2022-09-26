import React from "react";
import styled from "@emotion/styled";
import { Route, Routes } from "react-router";

const StyledHelloWorld = styled.div`
  width: 920px;
  height: 500px;
  background-color: dodgerblue;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/main"
          element={<StyledHelloWorld>Hello World</StyledHelloWorld>}
        />
      </Routes>
    </div>
  );
}

export default App;
