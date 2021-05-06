import { Button, Card, CardContent } from "@material-ui/core";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import uri from "../../api/endpoints";
import React, { useContext } from "react";
import image from "../../images/landing.png";
import "./../../index.scss";
import { AuthContext } from "../../providers/AuthProvider";
import { useHistory } from "react-router-dom";

export default function Landing() {
  const { state } = useContext(AuthContext);
  const { isAuthenticated } = state;
  const history = useHistory();

  return (
    <div>
      <div>
        <h2 className="welcome">
          Welcome to the future of <br></br>medical record storage
        </h2>
        <p className="landing-desc">
          Blockchain technology can be used to safely store confidential medical
          data of all forms
        </p>
        <img className="landing-photo" src={image} alt="Landing image"></img>
        {/* <FacebookIcon />
      <TwitterIcon />
      <LinkedInIcon /> */}
      </div>
      {isAuthenticated ? (
        <Button
          className="landing-signup"
          variant="contained"
          color="primary"
          onClick={() => history.push(uri.userview)}
        >
          Access your account
        </Button>
      ) : (
        <Button
          className="landing-signup"
          variant="contained"
          color="primary"
          onClick={() => history.push(uri.signup)}
        >
          Sign up for your blockchain account
        </Button>
      )}
    </div>
  );
}
