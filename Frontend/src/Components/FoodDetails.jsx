import React, { useState } from "react";
import clsx from "clsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleFoodList } from "../Redux/SingleFood/action";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Footer from "../Others/Footer";
import styles from "../Styling/FoodDetails.module.css";
import { cartListItem } from "../Redux/Cart/action";
import axios from "axios";

const drawerWidth = 300;
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
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    padding: "0px 30px 0px 20px",
  },
  drawerHeader: {
    display: "flex",
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
    marginLeft: 0,
  },
  mapPaper: {
    position: "absolute",
    width: 320,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
}));
function getHelpModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function FoodDetails() {
  const classes = useStyles();
  const theme = useTheme();
  const matchData = useParams();
  const foodItem = useSelector(
    (state) => state.singleFoodReducer.singlefoodList
  );
  const user = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [openAddons, setOpenAddons] = React.useState(false);
  const [modalHelpStyle] = React.useState(getHelpModalStyle);
  const [helpModalOpen, setHelpModalOpen] = React.useState(false);
  let cartList = useSelector((state) => state.cartItemReducer.cartList);
  const [query, setQuery] = useState("");
  const [getLocation, setGetLocation] = useState("Bangalore Karnataka");
  const [locationSearch, setLocationSearch] = useState("");
  const findItem = cartList.find((item) => item.title === foodItem.title);
  const [addons, setAddons] = useState([]);
  const [addonsTotalPrice, setAddonsTotalPrice] = useState(0);
  const [modalStyle] = React.useState(getModalStyle);
  const getLoc = useSelector((state) => state.mapReducer.getLocation)
  let total = 0;
  // console.log(foodItem.addons)
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].amount * cartList[i].qty;
  }
  useEffect(() => {
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationSearch}.json?access_token=pk.eyJ1Ijoia3JpdGlrYWd0IiwiYSI6ImNraDNzZzRqNjByc2ozMGxzcjc3OXFycTcifQ.USQiQRYZ40MTwAb-3XPXQA`
      )
      .then((res) => {
        setQuery(res.data.features.map((item) => item.place_name));
        // console.log(res.data.features.map((item) => item.place_name))
      })
      .catch((err) => console.log(err));
  }, [locationSearch]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getSingleFoodList(matchData.id));
  }, []);
  console.log(query, locationSearch);
  // const locateMe = () => {
  //     navigator.geolocation.getCurrentPosition(success, error, options);
  // }
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleHelpModalOpen = () => {
    setHelpModalOpen(true);
  };
  const handleHelpModalClose = () => {
    setHelpModalOpen(false);
  };
  const handleOpen = () => {
    setOpenAddons(true);
  };
  const handleAddons = (item, e) => {
    if (e.target.checked) {
      setAddons([...addons, item]);
      setAddonsTotalPrice(Number(addonsTotalPrice) + Number(item.price));
    } else if (!e.target.checked) {
      let findAddons = addons.findIndex(
        (addonsItem) => addonsItem.name === item.name
      );
      if (findAddons >= 0) {
        addons.splice(findAddons, 1);
        setAddons(addons);
        setAddonsTotalPrice(Number(addonsTotalPrice) - Number(item.price));
      }
    }
  };

  const handleClose = () => {
    const data = {
      title: foodItem.title,
      amount: foodItem.amount,
      type: foodItem.type,
      qty: 1,
      addons: [],
    };
    let quantity = cartList.find((res) => res.title === foodItem.title);
    if (quantity) {
      quantity.qty = quantity.qty + 1;
      cartList = cartList.map((res) =>
        res.title === foodItem.title ? quantity : res
      );
    } else {
      cartList = [...cartList, data];
    }
    dispatch(cartListItem(cartList));
    setOpenAddons(false);
  };
  const handleQuantity = (val) => {
    findItem.qty = Number(findItem.qty) + Number(val);
    cartList = cartList.map((qtyItem) =>
      qtyItem.title == findItem.title ? findItem : qtyItem
    );
    if ((findItem.qty == 1 && val == -1) || (findItem.qty === 0 && val == -1)) {
      cartList = cartList.filter(
        (qtyFilter) => qtyFilter.title !== findItem.title
      );
      dispatch(cartListItem(cartList));
      return;
    }
    dispatch(cartListItem(cartList));
  };
  const handleAddItem = () => {
    const data = {
      title: foodItem.title,
      amount: Number(foodItem.amount) + Number(addonsTotalPrice),
      type: foodItem.type,
      qty: 1,
      addons: addons,
    };
    let quantity = cartList.find((res) => res.title === foodItem.title);
    if (quantity) {
      quantity.qty = quantity.qty + 1;
      cartList = cartList.map((res) =>
        res.title === foodItem.title ? quantity : res
      );
    } else {
      cartList = [...cartList, data];
    }
    // console.log(cartList)
    dispatch(cartListItem(cartList));
    setOpenAddons(false);
  };
  const MapBody = (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#eeeeee",
        border: "none",
      }}
    >
      <div style={modalHelpStyle} className={classes.mapPaper}>
        <div
          id="simple-modal-title"
          className="text-right mr-3"
          onClick={handleHelpModalClose}
        >
          <i className="fas fa-times"></i>{" "}
        </div>
        <div className={styles.helpDiv}>
          <p id="simple-modal-description">
            <div className={styles.helpModalHeader}>Customer Support </div>
            <div className={styles.helpModalBody}>
              <p>
                Our customer experience team is available all days from 9am to
                12.00am to assist you with any questions or issues you might
                have.
              </p>
              <p>
                <b>EMAIL US</b> <br />
                <a
                  href="mailto:order@freshmenu.com"
                  className={styles.helpContact}
                >
                  order@freshmenu.com
                </a>
              </p>
              <p>
                <b>CALL US </b> <br />
                <a href="tel:080-6824-5911" className={styles.helpContact}>
                  080-6824-5911
                </a>
              </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
  const body = (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#eeeeee" }}>
      <div style={modalStyle} className={classes.paper}>
        <div className={styles.modalLayout}>
          <h3 id="simple-modal-title" className={styles.modalTitle}>
            {" "}
            {foodItem.title}
          </h3>
          <h4>
            <i
              className="fas fa-times text-secondary"
              onClick={handleClose}
            ></i>
          </h4>
        </div>
        <p id="simple-modal-description">
          <div className={styles.addonsTitle}> AddOns</div>
          {foodItem.addons === true &&
            foodItem.addons_value.map((items) => (
              <div className={styles.addonValue} key={items._id}>
                <div className={styles.inputDiv}>
                  <input
                    type="checkbox"
                    name="addons"
                    value={items.name}
                    onChange={(e) => handleAddons(items, e)}
                  />
                  <p className="pl-1"> {items.name}</p>
                </div>
                <p className={styles.addonValuePrice}>₹{items.price}</p>
              </div>
            ))}
          <div className={styles.modalFooter}>
            <div>
              {" "}
              <p> {addons.length} add-on selected</p>
            </div>
            <div className={styles.addonsSelected}>
              <p>₹{Number(foodItem.amount) + Number(addonsTotalPrice)}</p>
            </div>
            <div>
              <button
                type="button"
                className={`btn float-right rounded-pill ml-2  text-white ${styles.colorCode}`}
                onClick={handleAddItem}
              >
                ADD ITEM{" "}
              </button>
            </div>
          </div>
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className={open ? `container-fluid ml-5 pl-5 ` : `container`}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, { [classes.appBarShift]: open })}
        >
          <Toolbar>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-7">
                      <div className="row ">
                        <div className="col-3 p-2">
                          <Link to="/">
                            <img src="/Logo.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="col-9 text-left p-4">
                          <div
                            data-toggle="modal"
                            className="d-flex font-weight-bold"
                            data-target="#mapLocation"
                          >
                            <div className="text-secondary"> Deliver to:</div>
                            <span style={{ color: "#e85826", textOverflow: 'ellipsis' ,whiteSpace: 'nowrap', width:'300px',overflow: 'hidden'}}>
                              {getLoc}
                            </span>
                            <img src="/downarrow.svg" alt="downarrow.svg" />
                          </div>
                          
                        
                        </div>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="row">
                        <div className={`col-4 ${styles.freshClub} p-4`}>
                          <Link
                            to="/offers"
                            target="_Blank"
                            style={{
                              display: "flex",
                              textDecoration: "none",
                              color: "#4a4a4a",
                            }}
                          >
                            <img
                              src="/Clubs.svg"
                              className="img-fluid pr-1"
                              width="20px"
                              alt="clubs"
                            />
                            <div className="text-white">Try Fresh Club</div>
                          </Link>
                        </div>
                        <div className="col-3 p-4">
                          <div type="button" onClick={handleHelpModalOpen}>
                            <img src="/helpicon.svg" alt="helpicon.svg" />
                          </div>
                          <Modal
                            open={helpModalOpen}
                            onClose={handleHelpModalClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                          >
                            {MapBody}
                          </Modal>
                        </div>
                        <div className="col-3 p-4">
                          <div type="button" >
                            {user.isAuth ? (
                              <img src="/usericon.svg" alt="usericon.svg" />
                            ) : (
                              <img src="/guesticon.svg" alt="guesticon.svg" />
                            )}
                          </div>
                        </div>
                        <div
                          className="col-2 text-center"
                          style={{
                            backgroundColor:
                              cartList.length === 0 ? "white" : "#f3c920",
                          }}
                        >
                          <IconButton
                            aria-label="open drawer"
                            edge="end"
                            style={{ margin: "0px auto" }}
                            onClick={handleDrawerOpen}
                            className={`mt-3 ${clsx(open)}`}
                          >
                            <img src="/carticon.svg" alt="carticon.svg" />
                            <div className={styles.cartLength}>
                              <h5>{cartList.length}</h5>
                            </div>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <main
          className={clsx(classes.content, { [classes.contentShift]: open })}
        >
          <div className={classes.drawerHeader} />

          {foodItem && (
            <div className={`container-fluid ${styles.descriptionCard}`}>
              <div className={`row mt-5`}>
                <div className="col-12">
                  <div class="card mb-3 border border-white">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <img
                          src={foodItem.food_link}
                          className="card-img img-fluid"
                          alt={foodItem.title}
                        />
                        <div className="row">
                          <div className="col-12 d-flex">
                            <i class="fab fa-facebook-f p-3 bg-primary text-white h5 m-2 rounded"></i>
                            <i class="fab fa-twitter  p-3 bg-info text-white h5 m-2 rounded"></i>
                            <i class="fab fa-google  p-3 bg-danger text-white h5 m-2 rounded"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 text-left">
                        <div className="card-body">
                          <h5 className={`card-title ${styles.foodName}`}>
                            {foodItem.title}
                          </h5>
                          <div
                            style={{
                              display: "flex",
                              fontSize: "13px",
                              color: "#A8A8A8",
                            }}
                          >
                            <div className={styles.foodType}>
                              {foodItem.type === "VEG" ? (
                                <img
                                  src="/vegIcon.png"
                                  alt="Vegetarian"
                                  className={styles.typeIcon}
                                />
                              ) : (
                                <img
                                  src="/non-vegetarian.png"
                                  alt=""
                                  className={styles.typeIcon}
                                />
                              )}
                            </div>
                            <div className={styles.foodCuisine}>
                              {foodItem.cuisine}
                            </div>
                          </div>
                          <p className={`card-text ${styles.foodAmount}`}>
                            ₹{foodItem.amount}
                          </p>
                          <div className="row">
                            <div className="col-4">
                              <div>
                                {foodItem.addons === true ? (
                                  <div>
                                    {findItem == undefined ? (
                                      <button
                                        type="button"
                                        className={`btn float-right rounded-pill text-white ${styles.colorCode}`}
                                        onClick={handleOpen}
                                      >
                                        ADD +
                                      </button>
                                    ) : (
                                      <div
                                        className="d-flex px-3"
                                        style={{
                                          width: "80%",
                                          backgroundColor: "#df561d",
                                          borderRadius: "20px",
                                          color: "white",
                                        }}
                                      >
                                        <button
                                          className="px-2 py-2"
                                          onClick={() => handleQuantity(-1)}
                                          style={{
                                            width: "100%",
                                            borderRadius: "20px 0px 0px 20px",
                                            border: "none",
                                            backgroundColor: "#df561d",
                                            color: "white",
                                          }}
                                        >
                                          -
                                        </button>
                                        <span
                                          className="px-3 py-2"
                                          style={{
                                            display: "inline",
                                            width: "100%",
                                            borderRadius: "50%",
                                            border: "none",
                                            backgroundColor: "#df561d",
                                            backgroundImage:
                                              " linear-gradient(to left,#fe7c18,#df561d)",
                                            color: "white",
                                          }}
                                        >
                                          {findItem.qty}
                                        </span>
                                        <button
                                          className="px-2 py-2"
                                          onClick={() => handleOpen()}
                                          style={{
                                            width: "100%",
                                            borderRadius: "0px 20px 20px 0px",
                                            border: "none",
                                            backgroundColor: "#df561d",
                                            color: "white",
                                          }}
                                        >
                                          +
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <div>
                                    {findItem == undefined ? (
                                      <button
                                        type="button"
                                        className={`btn float-right rounded-pill text-white ${styles.colorCode}`}
                                        onClick={handleAddItem}
                                      >
                                        ADD
                                      </button>
                                    ) : (
                                      <div
                                        className="d-flex px-3"
                                        style={{
                                          width: "100%",
                                          backgroundColor: "#df561d",
                                          borderRadius: "20px",
                                          color: "white",
                                        }}
                                      >
                                        <button
                                          className="px-2 py-2"
                                          onClick={() => handleQuantity(-1)}
                                          style={{
                                            width: "100%",
                                            borderRadius: "20px 0px 0px 20px",
                                            border: "none",
                                            backgroundColor: "#df561d",
                                            color: "white",
                                          }}
                                        >
                                          -
                                        </button>
                                        <span
                                          className="px-3 py-2"
                                          style={{
                                            display: "inline",
                                            width: "100%",
                                            borderRadius: "50%",
                                            border: "none",
                                            backgroundColor: "#df561d",
                                            backgroundImage:
                                              " linear-gradient(to left,#fe7c18,#df561d)",
                                            color: "white",
                                          }}
                                        >
                                          {findItem.qty}
                                        </span>
                                        <button
                                          className="px-2 py-2"
                                          onClick={() => handleQuantity(1)}
                                          style={{
                                            width: "100%",
                                            borderRadius: "0px 20px 20px 0px",
                                            border: "none",
                                            backgroundColor: "#df561d",
                                            color: "white",
                                          }}
                                        >
                                          +
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                )}
                                <Modal
                                  open={openAddons}
                                  onClose={handleClose}
                                  aria-labelledby="simple-modal-title"
                                  aria-describedby="simple-modal-description"
                                >
                                  {body}
                                </Modal>
                              </div>
                              {/* <small className="text-muted pl-4">Customisable</small> */}
                            </div>
                          </div>
                          <h5 className={`card-text ${styles.foodDetails}`}>
                            DETAILS ABOUT THIS MEAL
                          </h5>
                          <p className={`card-text ${styles.foodDescription}`}>
                            {foodItem.details}
                          </p>
                          <div className={styles.foodType}>
                            {foodItem.type === "VEG" ? (
                              <img
                                src="/leaf.png"
                                alt="Vegetarian"
                                className={styles.typeIcon}
                              />
                            ) : (
                              <img
                                src="/chicken-leg.png"
                                alt=""
                                className={styles.typeIcon}
                              />
                            )}
                          </div>
                          <p className="card-text">{foodItem.type}</p>
                          <h5 className={`card-text ${styles.foodDetails}`}>
                            INGREDIENTS
                          </h5>
                          <p className={`card-text ${styles.foodDescription}`}>
                            {foodItem.ingredients}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
            <div>
              <div className={styles.cartHeader}>Your Cart</div>
              <div className={styles.cartCount}>
                {cartList.length === 0 ? (
                  ""
                ) : (
                  <div>{cartList.length} Items</div>
                )}
              </div>
            </div>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon className="float-right" />
            </IconButton>
          </div>
          {cartList.length === 0 ? (
            <div>
              <div>
                <img
                  src="https://www.freshmenu.com/pages/menu/images/ghost1.1.svg"
                  className={styles.image}
                  alt="Empty"
                />
              </div>
              <div>
                <div className={styles.emptyHeader}>Your Cart is empty.</div>
                <small className={styles.emptyBody}>
                  Add some delicious food available on our menu to checkout.
                </small>
                <button
                  className={styles.browserButton}
                  onClick={handleDrawerClose}
                >
                  Browse Food
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div>
                {cartList &&
                  cartList.map((res) => (
                    <>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className={styles.foodType}>
                          {res.type === "VEG" ? (
                            <img
                              src="/vegIcon.png"
                              alt="Vegetarian"
                              className={styles.typeIcon}
                            />
                          ) : (
                            <img
                              src="/non-vegetarian.png"
                              alt="Non Veg"
                              className={styles.typeIcon}
                            />
                          )}
                        </div>
                        <div> {res.title}</div>
                        <div> {res.qty}</div>
                      </div>
                      <div className="text-left pl-3 ">
                        <b>₹{res.amount}</b>
                      </div>
                    </>
                  ))}

                <div>
                  <Link to="/checkout">
                    <button
                      type="button"
                      class={` px-5 btn btn-lg rounded-pill ${styles.placeOrderButton} `}
                    >
                      {" "}
                      Place order . ₹{total}{" "}
                    </button>
                  </Link>
                </div>
                <div className={styles.safety}>
                  <h5>Safety Assured meals and contactless delivery</h5>
                </div>
              </div>
            </div>
          )}
        </Drawer>
      </div>

      <Footer />
    </>
  );
}
