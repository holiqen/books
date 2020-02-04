import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers";
// import { AppWrapper } from "./pages/main/styles";
import Globals from "./components/globals/Globals";

const store = createStore(rootReducer);

ReactDOM.render(
  <div>
    {/* <AppWrapper> */}
    <Provider store={store}>
      <Globals />
      <App />
    </Provider>
    {/* </AppWrapper> */}
  </div>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
