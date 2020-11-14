import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Oauth from "./Oauth";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../../Redux/Login/actions";
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

const SignupButton = styled.button`
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
  :focus {
    outline: none;
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

const Fail = styled.div`
  display: block;
  color: #e4572e;
  font-family: ProximaNova-Regular, Helvetica, Arial, sans-serif;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Signup = ({ handleCloseSignup,handleOpenSignup ,handleOpenLogin}) => {
  const dispatch = useDispatch();
  const { token, isAuth, isLoading, errorMsg, isError } = useSelector(
    (state) => state.reducer
  );

  // console.log(token, isAuth, isLoading, errorMsg, isError);
  // console.log(errorMsg, isError);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    firstname,
    lastname,
    mobile,
    email,
    password,
  };

  useEffect(() => {
    isAuth && handleCloseSignup();
  }, [isAuth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(apiCall(data));
  };

  return (
    <>
      <Flexbox>
        <Oauth {...{ handleCloseSignup }} />
      </Flexbox>

      <Second>
        <Line></Line>
        <OR>OR USE EMAIL</OR>
        <Line></Line>
      </Second>

      <form onSubmit={handleSubmit}>
        <InputBox
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          placeholder="First Name"
          required
        />
        <InputBox
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          placeholder="Last Name"
          required
        />
        <InputBox
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
          placeholder="10 digit Mobile Number"
          required
        />
        <InputBox
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          required
        />
        <InputBox
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          type="password"
          required
        />
        {isError && <Fail>* {errorMsg}</Fail>}
        <SignupButton type="submit">
          {!isLoading && <>Sign up</>}{" "}
          {isLoading && (
            <CircularProgress
              size={30}
              thickness={6}
              style={{ color: "white" }}
            />
          )}
        </SignupButton>
      </form>

      <hr />

      <Last>
        Already have an account? <span onClick={handleOpenLogin}>Log in</span>
      </Last>
    </>
  );
};

export default Signup;
