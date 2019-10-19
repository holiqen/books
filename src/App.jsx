import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./header/Header";
import Main from "./main/Main";

const MainWrapper = styled.div`
  padding: 0 40px;
  background-color: #dfcfbe;
  height: 100vh;
`;

const App = () => {
  return (
    <MainWrapper>
      <div className="App">
        <Header />
        <Main />
      </div>
    </MainWrapper>
  );
};

export default App;
