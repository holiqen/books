import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { AppWrapper } from "./pages/main/styles";

const store = createStore(rootReducer);

ReactDOM.render(
  <div className="App">
    <AppWrapper>
      <Provider store={store}>
        <App />
      </Provider>
    </AppWrapper>
  </div>,

  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
