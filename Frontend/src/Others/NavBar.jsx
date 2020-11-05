import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from '../Styling/NavBar.module.css'

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
    & img{
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
    max-width: 110px;
    padding: 23px;
    background-color: #e85826;
    color: white;
  }
  & #downloadapp {
    color: #4a4a4a;
    padding-left: 10px;
    transition: color 500ms;
    :hover{
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
  display: grid;
  box-shadow: 0 5px 15px -6px #4a4a4a;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .bottom-items {
    & > div{
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
`;

const Navbar = () => {
  return (
    <>
      <TopDiv>
        {/* navbar top div */}
        <div></div>
        <Link to="/" id="refreshmenu">
          <img id="logoicon" src="./logoicon.jpg" alt="logoicon.jpg" />
          <h2>RefreshMenu</h2>
        </Link>
        <div data-toggle="modal" data-target="#mapLocation" >
          <div id="deliverto" >Deliver to:</div>
          <span>Koramangala, Bengaluru</span>
          <img src="./downarrow.svg" alt="downarrow.svg" />
        </div>
       <div >
       <div className="modal fade" id="mapLocation" style={{width:'100%' ,height:'100%',backgroundColor:"#eeeeee"}} tabindex="-1" aria-labelledby="mapLocationLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className={`modal-title ${styles.headerDiv}`} id="mapLocationLabel">Enter Your Delivery Location</h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <div className={styles.buttonGroup}>
              <button type="button" class={`btn rounded-pill ${styles.button}`}>Bengaluru </button>
              <button type="button" class={`btn rounded-pill ${styles.button}`}>Mumbai</button>
              <button type="button" class={`btn rounded-pill ${styles.button}`}>New Delhi</button>
              <button type="button" class={`btn rounded-pill ${styles.button}`}>Gurgaon</button>
            </div>
              <div className = {styles.searchDiv}>
                <img src="https://www.freshmenu.com/pages/common/images/icn-search.svg" alt="Search Icons"/>
                <input type="text" placeholder = "Enter min 5 characters to search your location" className={styles.inputBox}/>
                <button className={styles.locateMe}>Locate Me</button>
              </div>
            </div>
           
          </div>
        </div>
      </div>      
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
          <Link href="#" id="downloadapp">
            Download App
          </Link>
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
          {/* user */}
          <div>
            <img src="./guesticon.svg" alt="guesticon.svg" />
          </div>
        </div>
        <div id="carticon">
          {/* cart */}
          <div>
            <img src="./carticon.svg" alt="carticon.svg" />
          </div>
        </div>
        <div></div>
      </BottomDiv>
    </>
  );
};
export default Navbar;
