import React from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { send } from "../../Redux/Login/actions";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  & > * {
    margin-right: 10px;
  }
`;

export const Oauth = (props) => {
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    // console.log(response);
    // console.log(props);
    if (response.accessToken) {
      props.handleCloseSignup && props.handleCloseSignup();
      props.handleCloseLogin && props.handleCloseLogin();
      dispatch(send(response));
    }
  };
  const responseFacebook = (response) => {
    console.log(response);
    if (response.accessToken) {
      props.handleCloseSignup && props.handleCloseSignup();
      props.handleCloseLogin && props.handleCloseLogin();
      dispatch(send(response));
    }
  };
  return (
    <Flex>
      <div>
        <FacebookLogin
          appId="1596220023834904"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          // render={(renderProps) => (
          //   <img onClick={renderProps.onClick} src="./SignInGoogle.png" alt =" " />
          // )}
          textButton = {
            <img src="./SignInFacebook.png" alt =" " width="100px"/>
          }
          cssClass="my-facebook-button-class"

        />
        <GoogleLogin
          clientId="70197845692-5vskkc55c3aps93k99q3fmbrf7r89t2k.apps.googleusercontent.com"
          buttonText="Login"
          render={(renderProps) => (
            <img onClick={renderProps.onClick} src="./SignInGoogle.png" alt =" " />
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </Flex>
  );
};
export default Oauth;
