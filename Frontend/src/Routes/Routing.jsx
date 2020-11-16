import React from "react";
import Home from "../Components/Home";
import { Route, Switch } from "react-router-dom";
import DiwaliGift from "../Components/DiwaliGift/DiwaliGift";
import FoodDetails from '../Components/FoodDetails'
import Checkout from '../Components/Checkout'
import Location from '../Others/LocationNotFound'
import Offers from '../Others/Offers'
import Filter from '../Components/FilterComponent'
import Profile from '../Components/Profile'
import {Error} from '../Others/Error'
import {CheckoutForm} from '../Others/CheckoutForm'

const Routing = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/diwali-gift" component={DiwaliGift} />
      <Route path='/:name/product/:id' render={(props) => <FoodDetails {...props}/> }/>
      <Route path='/checkout' render={(props) => <Checkout {...props} /> } />
      <Route path='/location' render={(props) => <Location {...props} /> } />
      <Route path='/offers' render={(props) => <Offers {...props} /> } />
      <Route path = '/filter' render={(props) => <Filter {...props} /> } />
      <Route path = '/profile' render={(props) => <Profile {...props} /> } />
      <Route path ='/checkout-form' render={(props) => <CheckoutForm {...props} /> } />
      <Route render = { (props) => <Error />}  />
    </Switch>
  );
};
export default Routing;
