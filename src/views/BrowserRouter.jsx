import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, NotFound } from ".";
import EventDetail from "./event-detail";

export default function BrowserRouter() {
  return (
    <Router basename="/fanoos-meet-planner/deploy">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/event/:id" component={EventDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
