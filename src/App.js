import React from "react";
import styled from "@emotion/styled";

const StyledHelloWorld = styled.div`
  width: 920px;
  background-color: dodgerblue;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <StyledHelloWorld>Hello world</StyledHelloWorld>
    </div>
  );
}

export default App;
