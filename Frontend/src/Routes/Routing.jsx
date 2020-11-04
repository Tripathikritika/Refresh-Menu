//All routes
import React from "react";
import Home from "../Components/Home";
import { Route } from "react-router-dom";

//All routes
const Routing = () => {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
};
export default Routing;
