import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Footer from '../../Others/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "white",
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar  position="fixed" className={clsx(classes.appBar)} >
        <Toolbar>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-left">
                <Link to="/">
                  <img src="/Logo.jpg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className="container-fluid p-0 m-0">
       <div className="pt-5">
          <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/e67af689-347e-4a1b-ba6b-784e6e10d483.png" className="img-fluid" width='100%' alt=""/>           
       </div>
       <div className="container text-center mt-5">
         <div className="row">
           <div className="col-12">
              <h6>Hungering for ambition is more satisfying over a good meal.</h6>
           </div>
           <div className="col-8 offset-2">
              <p className="text-muted">Have a Diwali gift order requirement for your loved one? We've got you covered. Get exclusive discounts and deals by placing a Diwali gift order with us. That's not all, get customised chef made party snacks that are made to order just for you. Tell more about your requirement and we'll take care of the rest.</p>

           </div>
         </div>
       </div>
      </div>
      <Footer />
    </>

  );
};

export default Navbar;
