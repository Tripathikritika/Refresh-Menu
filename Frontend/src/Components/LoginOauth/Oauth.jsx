import React from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import styled from "styled-components";

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    & > *{
        margin-right: 10px;
    }
`;

const responseGoogle = (response) => {
  console.log(response);
};
const responseFacebook = (response) => {
  console.log(response);
};
export const Oauth = () => {
  return (
    <Flex>
      <div>
      <GoogleLogin
        clientId="70197845692-5vskkc55c3aps93k99q3fmbrf7r89t2k.apps.googleusercontent.com"
        buttonText="Login"
        render = {renderProps => (
          <button onClick={renderProps.onClick}>Google</button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      </div>

      <FacebookLogin
        appId="633585867333844"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    </Flex>
  );
};
export default Oauth;
