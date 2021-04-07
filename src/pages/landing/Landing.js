import { Button, Card, CardContent } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import uri from "../../api/endpoints";
import React from "react";
import image from "../../images/landing.png";
import "./../../index.scss";

export default function Landing() {
  return (
    <div>
    <body>
      <h2 className = "welcome">Welcome to the future of <br></br>medical record storage</h2>
      <p className = "landing-desc">
        Blockchain technology can be used to safely store confidential medical
        data of all forms
      </p>
      {/* <Button className = "landing-signup" href={uri.signup}>
        Login / Sign up
      </Button> */}
      <h2 className = "slogan">Improving medical data storage, one block at a time</h2>
      <img className = "landing-photo" src = {image} alt = "Landing image"></img>
      {/* <FacebookIcon />
      <TwitterIcon />
      <LinkedInIcon /> */}
    </body>
    <Button className = "landing-signup" variant="contained" color="primary"href={uri.signup}>
        Sign up for your blockchain account 
    </Button>
    </div>
  );
}
