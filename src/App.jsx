import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import Authorization from "./pages/authorization/Authorization";
import Main from "./pages/main/Main";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/authorization">
          <Authorization />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
