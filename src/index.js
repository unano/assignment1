import React from "react";
import ReactDOM from "react-dom";
import Home from "./home";
import Introduce from "./introduce";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
          <Switch>
          <Route exact path="/~21057056g/introduce" component={Introduce} />
            <Route exact path="/~21057056g" component={Home} />
            <Redirect from="*" to="/~21057056g" />
          </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
