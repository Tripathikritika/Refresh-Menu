import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import LandingPage from "./LandingPage";
import Footer from "../Others/Footer.jsx";
import styles from '../Styling/Home.module.css'
import { Link, Redirect } from "react-router-dom";
import Search from "./Search";
import {cartListItem as updatedCartList} from '../Redux/Cart/action'
import LocationNotFound from '../Others/LocationNotFound'

const { default: Navbar } = require("../Others/NavBar");

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
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
  let cartListItem = useSelector((state) => state.cartItemReducer.cartList)
  const toggleState = useSelector((state) => state.foodReducer.toggleSearchStatus)
  let total = 0
  const dispatch = useDispatch()
  let locationFound = useSelector((state) => state.mapReducer.getLocation)

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
 
  const handleQuantity = ( res,val) =>{
     let findItem =  cartListItem.find((item) => item.title === res.title)
     findItem.qty = Number(findItem.qty) + val
     cartListItem = cartListItem.map((item) => item.title === res.title ? findItem : item)
     if(findItem.qty === 0 && val === -1){
      cartListItem = cartListItem.filter((qtyFilter) => qtyFilter.title !== findItem.title)
      dispatch(updatedCartList( cartListItem ))
      return
  }
     dispatch(updatedCartList( cartListItem ))

    }
  return (
    <>
      <div className={classes.root}>
        <div edge="end" onClick={handleDrawerOpen} >
          <img  
            aria-label="open drawer" 
            className={clsx(open)}
            src="./carticon.svg"
            alt="carticon.svg"
            style={{
              position: "absolute",
              top: "13.4%",
              right: "16%",
              zIndex : '12',
              // display : open ? 'none' : 'block'
            }}
          />
        </div>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Navbar openDrawer={handleDrawerOpen}/>
         { !toggleState && (locationFound.includes('Bangalore') || locationFound.includes('Bengaluru'))  ?<LandingPage style={{zIndex:10}}/> : toggleState && (locationFound.includes('Bangalore') || locationFound.includes('Bengaluru')) ?  <Search/> : <LocationNotFound />} 
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
                            <div style={{display:'flex' , border:'1px solid black',width:'30%'}} className="rounded-pill p-1 border border-secondary">
                                <div style={{width:'30%'}} onClick={() => handleQuantity(res,-1)}>
                                  <b style={{color:'#df561d'}}>-</b> 
                                </div>
                                <div style={{width:'40%'}}>
                                  <b>{res.qty}</b>
                                </div>
                                <div style={{width:'30%'}} onClick={() => handleQuantity(res,1)}>
                                  <b style={{color:'#df561d'}}>+</b> 
                                </div>
                                </div>
                          </div>
                          <div className= "text-left pl-3 " >
                             <b>₹{res.amount}</b> 
                          </div>
                        </>
                      ))}

                      <div>
                       <Link to='/checkout'><button type="button" class={`px-5 btn btn-lg rounded-pill ${styles.placeOrderButton} `}> Place order . ₹{total} </button></Link> 
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