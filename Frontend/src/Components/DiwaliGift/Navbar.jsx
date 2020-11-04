import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto;
  border-bottom: 1px solid #ececec;
  align-items: center;
  font-weight: 600;
  box-shadow: 0 5px 15px -6px #4a4a4a;
  position: fixed;
  width: 100%;
  background: white;
  z-index: 1;
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
  & #logoicon {
    width: 35px;
  }
  & a {
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <TopDiv>
      {/* navbar top div */}
      <div></div>
      <Link to="/" id="refreshmenu">
        <img id="logoicon" src="./logoicon.jpg" alt="logoicon.jpg" />
        <h2>RefreshMenu</h2>
      </Link>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </TopDiv>
  );
};

export default Navbar;
