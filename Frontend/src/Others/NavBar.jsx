import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import { useSelector } from "react-redux";

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
    min-width:152px;
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
    background-color: #f2f3f3;
    padding: 20px 0px;
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
    width: "400px",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);

  const { token, isAuth, isLoading, errorMsg, isError } = useSelector(
    (state) => state.reducer
  );

  console.log(token, isAuth, isLoading, errorMsg, isError);

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

  return (
    <>
      <TopDiv>
        {/* navbar top div */}
        <div></div>
        <Link to="/" id="refreshmenu">
          <img id="logoicon" src="./logoicon.jpg" alt="logoicon.jpg" />
          <h2>RefreshMenu</h2>
        </Link>
        <div>
          <div id="deliverto">Deliver to:</div>
          <span>Koramangala, Bengaluru</span>
          <img src="./downarrow.svg" alt="downarrow.svg" />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <Link to="/diwali-gift" id="discountoffer">
            <img
              width="30px"
              src="./discountoffer.svg"
              alt="discountoffer.svg"
            />
            <div>Diwali Gift</div>
          </Link>
          <a href="#" id="downloadapp">
            Download App
          </a>
        </div>
      </TopDiv>

      <BottomDiv>
        {/* navbar bottom div */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
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
          <div>
            <img src="./helpicon.svg" alt="helpicon.svg" />
          </div>
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
              <span className="tooltiptext">
                
              </span>
            </div>
          )}
        </div>
        <div id="carticon">
          {/* cart */}
          <div>
            <img src="./carticon.svg" alt="carticon.svg" />
          </div>
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
