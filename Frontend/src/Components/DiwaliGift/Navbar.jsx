import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

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


      </div>
    </>

  );
};

export default Navbar;
