import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Login from "../Components/LoginOauth/Login";
import Signup from "../Components/LoginOauth/Signup";
import styles from "../Styling/NavBar.module.css";

const TopDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto;
  border-bottom: 1px solid #ececec;
  align-items: center;
  font-weight: 600;
  & > * {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
      margin-top: 5px;
    }
  }
  & #refreshmenu {
    margin-left: 7%;
  }
  & h2 {
    color: black;
  }
  & > div > span {
    color: #e85826;
    cursor: pointer;
    & ~ * {
      cursor: pointer;
    }
  }
  & #deliverto {
    color: #9b9b9b;
    padding-right: 10px;
  }
  & #logoicon {
    width: 35px;
  }
  & #discountoffer {
    display: flex;
    align-items: center;
    min-width: 152px;
    padding: 23px;
    background-color: #e85826;
    color: white;
  }
  & #downloadapp {
    color: #4a4a4a;
    padding-left: 10px;
    transition: color 500ms;
    :hover {
      color: #e85826;
    }
  }
  & a {
    text-decoration: none;
  }
`;

const BottomDiv = styled.div`
  font-weight: 600;
  color: #4a4a4a;
  border-bottom: 1px solid #ececec;
  width: 100%;
  display: grid;
  
  box-shadow: 0 5px 15px -6px #4a4a4a;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .bottom-items {
    & > div {
      cursor: pointer;
      display: flex;
      padding: 10px 15px;
      border-radius: 20px;
      transition: background-color 500ms;
      :hover {
        background-color: #f2f3f3;
      }
    }
  }
  & #carticon {
    cursor: pointer;
    // background-color: #f2f3f3;
    padding: 40px 0px;

  }
  & .tooltip {
    position: relative;
    display: inline-block;
  }

  & .tooltip .tooltiptext {
    visibility: hidden;
    width: 80px;
    background-color: white;
    border: 1px solid #f2f3f3;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 115%;
    left: 90%;
    margin-left: -60px;
  }

  & .tooltiptext > div {
    padding: 5px;
    padding-left: 10px;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    transition: color 500ms;
    :hover {
      color: #e85826;
    }
  }

  & .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #000 transparent;
  }

  & .tooltip:hover .tooltiptext {
    visibility: visible;
  }
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  mapPaper: {
    position: "absolute",
    width: 320,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],

  }
}));

function getHelpModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const Navbar = ( props ) => {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [query, setQuery] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [getLocation, setGetLocation] = useState("Bangalore Karnataka");
  const [helpModalOpen, setHelpModalOpen] = React.useState(false);
  const [modalHelpStyle] = React.useState(getHelpModalStyle);
  const { token, isAuth, isLoading, errorMsg, isError } = useSelector(
    (state) => state.reducer
  );
  // console.log(token, isAuth, isLoading, errorMsg, isError);
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
  
  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleOpenSignup = () => {
    setOpenSignup(true);
  };

  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  const handleHelpModalOpen = () => {
    setHelpModalOpen(true);
  };
  const handleHelpModalClose = () => {
    setHelpModalOpen(false);
  };

  const MapBody = (
    <div style={{ width: "100%",height: "100%",backgroundColor: "#eeeeee",border:'none'}}>
      <div style={modalHelpStyle} className={classes.mapPaper}>
        <div id="simple-modal-title" className="text-right mr-3" onClick={handleHelpModalClose}><i className="fas fa-times"></i> </div>
        <div className={styles.helpDiv}>
          <p id="simple-modal-description">
            <div className={styles.helpModalHeader}>Customer Support </div>
            <div className={styles.helpModalBody}>
              <p>
                Our customer experience team is available all days from 9am to 12.00am to assist you with any questions or issues you might have.
              </p>
              <p>
                <b>EMAIL US</b> <br/>
                <a href="mailto:order@freshmenu.com" className={styles.helpContact}>order@freshmenu.com</a> 
              </p>
              <p>
                <b>CALL US </b>  <br/>
                <a href="tel:080-6824-5911" className={styles.helpContact}>080-6824-5911</a>
              </p>
            </div>
          </p>
        </div>
      
      </div>
    </div>
  );

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {   
    var crd = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  const locateMe = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  
  return (
    <>
      <TopDiv  style={{width:'85%' , margin : 'auto'}}>
        {/* navbar top div */}
        <div></div>
        <Link to="/" id="refreshmenu">
        <div>
            <img src="./Logo.jpg" alt=""/>
        </div>
        </Link>
        <div data-toggle="modal" data-target="#mapLocation">
          <div id="deliverto">Deliver to:</div>
          <span>{getLocation}</span>
          <img src="./downarrow.svg" alt="downarrow.svg" />
        </div>
        {/* Search Map Modal */}
        <div>
          <div
            className="modal fade"
            id="mapLocation"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#f2f3f3",
            }}
            tabIndex="-1"
            aria-labelledby="mapLocationLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3
                    className={`modal-title ${styles.headerDiv}`}
                    id="mapLocationLabel"
                  >
                    Enter Your Delivery Location
                  </h3>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className={styles.buttonGroup}>
                    <button
                      type="button"
                      className={`btn rounded-pill ${styles.button}`}
                    >
                      Bengaluru{" "}
                    </button>
                    <button
                      type="button"
                      className={`btn rounded-pill ${styles.button}`}
                    >
                      Mumbai
                    </button>
                    <button
                      type="button"
                      className={`btn rounded-pill ${styles.button}`}
                    >
                      New Delhi
                    </button>
                    <button
                      type="button"
                      className={`btn rounded-pill ${styles.button}`}
                    >
                      Gurgaon
                    </button>
                  </div>
                  <div className={styles.searchDiv}>
                    <img
                      src="https://www.freshmenu.com/pages/common/images/icn-search.svg"
                      alt="Search Icons"
                    />
                    <input
                      type="text"
                      placeholder="Enter min 5 characters to search your location"
                      className={styles.inputBox}
                      onChange={(e) => setLocationSearch(e.target.value)}
                    />
                    <button className={styles.locateMe} onClick = {locateMe}>Locate Me</button>
                  </div>
                  {query && (
                    <div
                      style={{
                        width: "100%",
                        minHeight: "50px",
                        border: "1px solid black",
                        textAlign: "left",
                      }}
                    >
                      {query.map((res) => (
                        <p
                          className="pl-3"
                          onClick={(e) => setGetLocation(e.target.textContent)}
                          data-dismiss="modal"
                        >
                          {res} <hr />
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div><div></div><div></div><div></div>
        <div>

          <Link to="/diwali-gift" id="discountoffer">
            
            <img
              width="20px"
              src="./discountoffer.svg"
              alt="discountoffer.svg"
            />
            <div>Diwali Gift</div>
          </Link>
          <Link to="#" id="downloadapp">
            Download App
          </Link>
        </div>
      </TopDiv>

      <BottomDiv>
        {/* navbar bottom div */}
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        
        <div className="bottom-items">
          {/* search */}
          <div>
            <img src="./searchicon.svg" alt="searchicon.svg" />
            <div>Search</div>
          </div>
        </div>
        <div className="bottom-items">
          {/* offers */}
          <div>
            <div>Offers</div>
          </div>
        </div>
        <div className="bottom-items">
          {/* help */}
          <div type="button" onClick={handleHelpModalOpen} >
            <img src="./helpicon.svg" alt="helpicon.svg" />
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
        <div className="bottom-items">
        {!isAuth && (
            /* guest */
            <div className="">
              <img src="./guesticon.svg" alt="guesticon.svg" />
              <span className="tooltiptext">
                <div onClick={handleOpenLogin}>Log In</div>
                <div onClick={handleOpenSignup}>Sign Up</div>
              </span>
            </div>
          )}
          {isAuth && (
            /* user */
            <div className="">
              <img src="./usericon.svg" alt="usericon.svg" />
              <span className="tooltiptext"></span>
            </div>
          )}
        </div>
        <div id="carticon">
          {/* cart */}
          {/* <img
            src="./carticon.svg"
            alt="carticon.svg"
          /> */}
        </div>
        <div></div>
      </BottomDiv>

      {/* Login Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openLogin}
        onClose={handleCloseLogin}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openLogin}>
          <div className={classes.paper}>
            <Login {...handleOpenLogin} />
          </div>
        </Fade>
      </Modal>

      {/* Signup Modal */}
      <Modal
        style={{ width: "400px", margin: "auto" }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openSignup}
        onClose={handleCloseSignup}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openSignup}>
          <div className={classes.paper}>
            <Signup />
          </div>
        </Fade>
      </Modal>
    </>
  );
};
export default Navbar;