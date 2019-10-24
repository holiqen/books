import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";

const MainWrapper = styled.div`
  padding: 0 40px;
  background-color: #efebe9;
  height: 100vh;
  padding-top: 10px;
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
