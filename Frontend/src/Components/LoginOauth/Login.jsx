import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { verifyOtp } from "../../Redux/OtpVerify/actions";
import Oauth from "./Oauth";
import styles from "./Login.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  font-family: ProximaNova-Semibold, Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #fff;
  position: relative;
  border: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ff8459;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.3);
    transition: all 0.2s cubic-bezier(0.15, 0.69, 0.83, 0.67);
  }
  & :nth-last-child(2) {
    position: absolute;
    left: 0px;
  }
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

const Login = () => {
  const dispatch = useDispatch();
  const {
    token,
    email,
    mobile,
    isAuth,
    isToken,
    isLoading,
    message,
    isError,
  } = useSelector((state) => state.otpVerifyReducer);

  console.log(token, email, mobile, isAuth, isLoading, message, isError);

  const [inp, setInp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(verifyOtp(inp));
  };

  return (
    <>
      <Flexbox>
        <Oauth />
      </Flexbox>

      <Second>
        <Line></Line>
        <OR>OR</OR>
        <Line></Line>
      </Second>

      {!isToken && (
        <form onSubmit={handleSubmit}>
          <div class={styles.tooltip}>
            <InputBox
              value={inp}
              onChange={(e) => setInp(e.target.value)}
              placeholder="Mobile Number/ Email ID"
              autoFocus
              required
            />
            <span
              style={
                message ? { visibility: "visible" } : { visibility: "hidden" }
              }
              class={styles.tooltiptext}
            >
              {message}
            </span>
          </div>

          {isLoading ? (
            <SendOtp type="submit">
              <CircularProgress
                size={30}
                thickness={6}
                style={{ color: "white" }}
              />
              <div>Sending..</div>
            </SendOtp>
          ) : (
            <SendOtp type="submit">
              <div>Send OTP</div>
            </SendOtp>
          )}
        </form>
      )}

      {isToken && (
        <form style={{width:"320px", textAlign: "center"}} onSubmit={handleSubmit}>
          <div>{`We have sent a verification code to ${inp}. Please enter it below.`}</div>
          <div class={styles.tooltip}>
            <InputBox
              value={inp}
              onChange={(e) => setInp(e.target.value)}
              placeholder="Mobile Number/ Email ID"
              autoFocus
              required
            />
            <span
              style={
                message ? { visibility: "visible" } : { visibility: "hidden" }
              }
              class={styles.tooltiptext}
            >
              {message}
            </span>
          </div>

          {isLoading ? (
            <SendOtp type="submit">
              <CircularProgress
                size={30}
                thickness={6}
                style={{ color: "white" }}
              />
              <div>Sending..</div>
            </SendOtp>
          ) : (
            <SendOtp type="submit">
              <div>Send OTP</div>
            </SendOtp>
          )}
        </form>
      )}

      <hr />

      <Last>
        Don't have an account? <span>Sign up</span>
      </Last>
    </>
  );
};

export default Login;
