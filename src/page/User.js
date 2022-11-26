import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import ClientAPI from "../client/clientApi";
import createLocalStorage from "../utils/createLocalStorage";
import getLocaleStorage from "../utils/getLocalStorage";

export default function User() {
  const clientId = process.env.REACT_APP_GOOGLE_AUTH;
  const handleSuccess = async (googleData) => {
    const res = await new ClientAPI("/user/auth").post({ googleData });
    createLocalStorage(res.data);
    window.location.href = `/${res.data.id}`;
  };

  const handleError = (error) => {
    console.log("Error : " + error);
  };
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  useEffect(() => {
    const user = getLocaleStorage();
    if (user.id != null) window.location.href = `/${JSON.parse(user.id)}`;
  }, []);
  return (
    <div className="User">
      <GoogleLogin
        clientId={clientId}
        buttonText="Continue with Google"
        onSuccess={handleSuccess}
        onFailure={handleError}
        redirectUri={encodeURI("http://localhost:3000")}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
