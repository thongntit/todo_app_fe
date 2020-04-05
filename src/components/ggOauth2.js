import React from 'react';
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
    console.log(response);
}
const GoogleButton = () => {
    return (
        <GoogleLogin
            clientId="764553149648-qmv3384sh84ift5vfgcssorcjq0q4smh.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}
export default GoogleButton