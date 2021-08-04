import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router";
import GoogleLogin from "react-google-login";
import { actions as userActions } from "../../components/User/redux/action";
import { PATHS } from "../../constant";
import { METHODS } from "../../services/api";

import "./styles.scss";

function Login() {
  const [linkStore, setLinkStore] = useState({
    referrer: "",
  });
  useEffect(() => {
    axios({
      method: METHODS.PUT,
      url: `${process.env.REACT_APP_MERAKI_URL}/users/me`,
      headers: {
        accept: "application/json",
        // Authorization: user.data.token,
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwOTQiLCJlbWFpbCI6ImtvbWFsaWthMzY1QGdtYWlsLmNvbSIsImlhdCI6MTYyNzk5MjEyNiwiZXhwIjoxNjU5NTQ5NzI2fQ.7kntQSuX8c4VBpanc4HLM6k5DtjgiVMwOoh8B5gizIs",
      },
      data: linkStore,
    })
      .then((res) => {
        console.log(res, "response");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, [linkStore]);

  const dispatch = useDispatch();
  const { loading, data } = useSelector(({ User }) => User);
  const isAuthenticated = data && data.isAuthenticated;
  const updateReferrer = (value) => {
    setLinkStore(value);
  };
  const onSignIn = async (googleUser) => {
    let profile = googleUser.getBasicProfile();
    let { id_token: idToken } = googleUser.getAuthResponse();
    const googleData = {
      id: profile.getId(),
      name: profile.getName(),
      imageUrl: profile.getImageUrl(),
      email: profile.getEmail(),
      idToken,
    };
    if (window.location.href.includes("?referrer")) {
      const Link = window.location.href
        .replace(/%26/g, "&")
        .replace(/%3D/g, "=")
        .replace(/%25/g, "%")
        .split("referrer");
      updateReferrer(`referrer${Link[1]}`);
    }
    // let's send the data to our backend.
    dispatch(userActions.onUserSignin(googleData));
  };
  const onGoogleLoginFail = (errorResponse) => {
    // eslint-disable-next-line no-console
    console.log("onGoogle login fail", errorResponse);
  };

  if (isAuthenticated) {
    return <Redirect to={PATHS.COURSE} />;
  }

  return (
    <div className="ng-login">
      <div className="logo" />
      {loading ? (
        "..."
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login/Sign Up"
          onSuccess={onSignIn}
          onFailure={onGoogleLoginFail}
          cookiePolicy={"single_host_origin"}
          className="google-login"
        />
      )}
    </div>
  );
}

export default Login;
