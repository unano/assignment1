import React from "react";
import ReactDOM from "react-dom";
import Home from "./home";
import Introduce from "./introduce";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
          <Switch>
          <Route path="/introduce" component={Introduce} />
            <Route path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
