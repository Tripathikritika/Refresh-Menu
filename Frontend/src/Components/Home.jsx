import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import LandingPage from "./LandingPage";
import Footer from "../Others/Footer.jsx";
import styles from '../Styling/Home.module.css'
import { Link } from "react-router-dom";
import Search from "./Search";

const { default: Navbar } = require("../Others/NavBar");

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  hide: {
    display: "none",
    backgroundColor: "red",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const cartListItem = useSelector((state) => state.cartItemReducer.cartList)
  const toggleState = useSelector((state) => state.foodReducer.toggleSearchStatus)
  let total = 0
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // console.log(open);
  const handleDrawerClose = () => {
    setOpen(false);
  };

  for(let i = 0 ; i < cartListItem.length ; i++){
      total +=( cartListItem[i].amount) * (cartListItem[i].qty)
  }
  return (
    <>
      <div className={classes.root}>
        <div onClick={handleDrawerOpen} className={clsx(open) }>
          <img
            src="./carticon.svg"
            alt="carticon.svg"
            style={{
              position: "absolute",
              top: "13.4%",
              right: "12%",
              zIndex : '10',
              // display : open ? 'none' : 'block'
            }}
          />
        </div>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Navbar openDrawer={handleDrawerOpen} />
         { !toggleState ?<LandingPage /> : <Search/>} 
          <Footer />
        </main>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
         
          <div className={classes.drawerHeader}>
          <div >
            <div className={styles.cartHeader}>Your Cart</div>
            <div className={styles.cartCount}>
                {
                  cartListItem.length === 0 ? "" :  <div>{cartListItem.length} Items</div>
                }
            </div>
            
          </div>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </div>
          {
                cartListItem.length === 0 ?(
                  <div>
                      <div>
                        <img src='https://www.freshmenu.com/pages/menu/images/ghost1.1.svg' className={styles.image} alt="Empty"/>
                      </div>
                      <div>
                        <div className={styles.emptyHeader}>Your Cart is empty.</div>
                        <small className={styles.emptyBody}>Add some delicious food available on our menu to checkout.</small>
                        <button className = {styles.browserButton} onClick={handleDrawerClose}> Browse Food </button> 
                      </div>
                      
                  </div>
                ): (
                  <div>
                    <div>
                      { 
                      cartListItem && cartListItem.map((res) => (
                        <>
                          <div style={{display:'flex' , justifyContent:'space-between'}}>
                            <div className={styles.foodType}>
                              {res.type === 'VEG' ? <img src="./vegIcon.png" alt="Vegetarian" className={styles.typeIcon}/>  : 
                              <img src="/non-vegetarian.png" alt="Non Veg" className={styles.typeIcon}/>}</div>
                            <div> {res.title}</div>
                            <div> {res.qty}</div>
                          </div>
                          <div className= "text-left pl-3 " >
                             <b>₹{res.amount}</b> 
                          </div>
                        </>
                      ))}

                      <div>
                       <Link to='/checkout'><button type="button" class={` px-5 btn btn-lg rounded-pill ${styles.placeOrderButton} `}> Place order . {total} </button></Link> 
                      </div>
                      <div className={styles.safety}>
                        <h5>Safety Assured meals and contactless delivery</h5>
                      </div>
                    </div>
                  </div>
                )
              }
        </Drawer>
      </div>
    </>
  );
};

export default Home;