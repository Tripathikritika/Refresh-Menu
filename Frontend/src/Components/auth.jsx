import React from 'react'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const responseGoogle = (response) => {
    console.log(response);
}
const responseFacebook = (response) => {
    console.log(response);
  }
   
  
export const GoogleAuth = () => {
    return (
        <div>
            <GoogleLogin
                clientId="1002976949995-2dde78o2rd46ovt32cn9vph82rm85pha.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
                    <FacebookLogin
            appId="1596220023834904"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            icon="fa-facebook"
        />
  
        </div>
    )
}
