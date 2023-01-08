import { Container, Stack } from "@mantine/core";
import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import ClientAPI from "../client/clientApi";
import getLocaleStorage from "../utils/function/getLocalStorage";
import setCoordLocalStorage from "../utils/function/setLocalStorage";

export default function User() {
  useEffect(() => {
    const { user } = getLocaleStorage();
    if (user != null) window.location.href = `/${user.id}`;
  }, []);
  const clientId = process.env.REACT_APP_GOOGLE_AUTH;
  const handleSuccess = async (googleData) => {
    const res = await new ClientAPI("/user/auth").post({ googleData });
    setCoordLocalStorage(undefined, res.data);
    console.log(res.data);
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

  return (
    <>
      <Container sx={{ height: "80vh" }}>
        <Stack align="center" justify="center" sx={{ height: "100%" }}>
          <GoogleLogin
            clientId={clientId}
            buttonText="Continue with Google"
            onSuccess={handleSuccess}
            onFailure={handleError}
            redirectUri={encodeURI("http://localhost:3000")}
            cookiePolicy={"single_host_origin"}
          />
        </Stack>
      </Container>
    </>
  );
}
