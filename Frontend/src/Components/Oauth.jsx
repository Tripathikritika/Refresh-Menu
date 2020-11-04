import React from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

const responseGoogle = (response) => {
  console.log(response);
};
const responseFacebook = (response) => {
  console.log(response);
};
export const Oauth = () => {
  return (
    <div>
      <GoogleLogin
        clientId=""
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <FacebookLogin
        appId=""
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    </div>
  );
};
export default Oauth;
