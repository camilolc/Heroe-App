import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LogingScreen } from "../components/login/LogingScreen";
import { DashboardRoutes } from "./DashboardRoutes";
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LogingScreen} />
          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};
