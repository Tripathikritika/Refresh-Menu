//All routes
import React from "react";
import Home from "../Components/Home";
import { Route, Switch } from "react-router-dom";
import DiwaliGift from "../Components/DiwaliGift/DiwaliGift";
import FoodDetails from '../Components/FoodDetails'
//All routes
const Routing = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/diwali-gift" component={DiwaliGift} />
      <Route path='/:name/product/:id' render={(props) => <FoodDetails {...props}/> }/>
    </Switch>
  );
};
export default Routing;
