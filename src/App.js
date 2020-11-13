import React from "react";

import "./App.css";
import Log from "./components/Log";
import Question from "./components/Question";
import { Provider } from "react-redux";
import store from "./store";

import { Switch, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Score from "./components/Score";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Switch>
          <Route path="/questions" component={Question}></Route>
          <Route path="/score" component={Score}></Route>
          <Route path="/" component={Log}></Route>
        </Switch>
        {/* <Log />
      <Question /> */}
      </Provider>
    </React.Fragment>
  );
}

export default App;
