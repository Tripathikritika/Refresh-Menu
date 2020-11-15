import React from 'react'
import clsx from "clsx";
import Footer from '../Others/Footer'
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import {  useSelector } from "react-redux";
import styles from '../Styling/Profile.module.css'

const useStyles = makeStyles((theme) => ({
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: "white",
    }
}));

function Profile() {
    const classes = useStyles();
    const userImage = useSelector((state) => state.reducer.userAvatar);
    const name = useSelector((state) => state.reducer.userName);
    const email = useSelector((state) => state.reducer.userEmail);
    const firstName = name.split(" ")[0]
    const lastName = name.split(" ")[1]


    return (
        <>
        <div className="container">
        <AppBar
          position="fixed"
          className={clsx(classes.appBar)}
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        </div>
        <div style={{height:'100vh'}}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3 mt-5">
                        <div className="mb-3"><img src={userImage} className="rounded-pill" alt={userImage}/></div>
                        <div class=" text-left">{name}</div>
                        <div class={`list-group ${styles.listDiv} `} id="list-tab" role="tablist" >
                            <a id="list-profile-list active" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile"><img src="./Profile.svg" alt="Profile Icon" className="img-fluid"/> My Profile</a>
                            <a id="list-address-list" data-toggle="list" href="#list-address" role="tab" aria-controls="address"><img src="./AddressBook.svg" alt="Profile Icon" className="img-fluid"/>Address Book</a>
                            <a id="list-fresh-list" data-toggle="list" href="#list-fresh" role="tab" aria-controls="fresh"><img src="./FreshMoney.svg" alt="Profile Icon" className="img-fluid"/> Fresh Money(₹0)</a>
                            <a id="list-fav-list" data-toggle="list" href="#list-fav" role="tab" aria-controls="fav"><i className="far fa-heart pl-2" ></i> Favourite</a>
                        </div>
                    </div>
                    <div className="col-8 mt-5 pt-5">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane active fade show" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                <div className="container text-left">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h6 >Basic Info </h6>
                                                </div>
                                            </div>
                                            <div className="row" >
                                                <div className={`col-6 ${styles.leftSideField}`}>
                                                    FIRST NAME
                                                </div>
                                                <div className={`col-6 ${styles.rightSideField}`}>
                                                    {firstName}
                                                </div>
                                            </div>
                                            <div className="row" >
                                                <div className={`col-6 ${styles.leftSideField}`}>
                                                    LAST NAME
                                                </div>
                                                <div className={`col-6 ${styles.rightSideField}`}>
                                                    {lastName}
                                                </div>
                                            </div>
                                            <div className="row" >
                                                <div className={`col-6 ${styles.leftSideField}`}>
                                                    YOUR EMAIL
                                                </div>
                                                <div className={`col-6 ${styles.rightSideField}`}>
                                                    {email}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="list-address" role="tabpanel" aria-labelledby="list-address-list"></div>
                            <div class="tab-pane fade" id="list-fresh" role="tabpanel" aria-labelledby="list-fresh-list">...</div>
                            <div class="tab-pane fade" id="list-fav" role="tabpanel" aria-labelledby="list-fav-list">...</div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
        </>
    )
}

export default Profile