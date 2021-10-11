import React from "react";
import ReactDOM from "react-dom";
import Home from "./home";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <div className="container-fluid">
          <Switch>
            <Route path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
