import React from "react";
import Home from "../Components/Home";
import { Route, Switch } from "react-router-dom";
import DiwaliGift from "../Components/DiwaliGift/DiwaliGift";
import FoodDetails from '../Components/FoodDetails'
import Checkout from '../Components/Checkout'

const Routing = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/diwali-gift" component={DiwaliGift} />
      <Route path='/:name/product/:id' render={(props) => <FoodDetails {...props}/> }/>
      <Route path='/checkout' render={(props) => <Checkout {...props} /> } />
    </Switch>
  );
};
export default Routing;
