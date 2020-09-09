import React, { useReducer } from "react";
import reducer from "./reducer";
import { StateContext } from "./Context";
import { initial } from "./inital";
import App from "./App";

function MainApp() {
  return (
    <StateContext.Provider value={useReducer(reducer, initial)}>
      <App />
    </StateContext.Provider>
  );
}

export default MainApp;
