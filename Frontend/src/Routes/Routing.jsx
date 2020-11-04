//All routes
import React from "react";
import Home from "../Components/Home";
import { Route, Switch } from "react-router-dom";
import DiwaliGift from "../Components/DiwaliGift/DiwaliGift";

//All routes
const Routing = () => {
  return (
    <Switch>
      <Route path="/diwali-gift" component={DiwaliGift} />
      <Route path="/" component={Home} />
    </Switch>
  );
};
export default Routing;
