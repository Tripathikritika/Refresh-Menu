import React from "react";
import styled from "styled-components";
import Oauth from "./Oauth";

const Flexbox = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  width: 70px;
  content: "";
  height: 1px;
  background: #d1d2d9;
  margin-right: 18px;
  /* display: inline-block; */
`;

const OR = styled.div`
  margin-right: 18px;
`;

const Second = styled.div`
  margin: 25px 0 20px;
  font-size: 14px;
  color: #4a4a4a;
  opacity: 0.42;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.input`
  height: 40px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e7e9e9;
  line-height: 1.6;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  :focus {
    border: 1px solid #e85826;
    outline: none;
  }
`;

const SendOtp = styled.button`
  border-radius: 3px;
  background: linear-gradient(to right, #f5914e, #e85826);
  margin-bottom: 11px;
  height: 42px;
  border-radius: 3px;
  font-family: ProximaNova-Semibold, Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #fff;
  position: relative;
  border: 0;
  width: 100%;
`;

const Last = styled.div`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #b6b6b6;
  & span {
    color: #e85826;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const handleSubmit = (e) => {
    e.preventDefault();
}

const Login = () => {
  return (
    <>
      <Flexbox>
        <Oauth/>
      </Flexbox>

      <Second>
        <Line></Line>
        <OR>OR</OR>
        <Line></Line>
      </Second>

        <form onSubmit={handleSubmit}>
            <InputBox placeholder="Mobile Number/ Email ID" autoFocus required/>
            <SendOtp type='submit'>Send OTP</SendOtp>
        </form>

      <hr />

      <Last>
        Don't have an account? <span>Sign up</span>
      </Last>
    </>
  );
};

export default Login;
