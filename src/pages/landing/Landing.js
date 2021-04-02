import { Button, Card, CardContent } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import uri from "../../api/endpoints";

import React from "react";

export default function Landing() {
  return (
    <div>
      <h2>Welcome to the future of medical record storage</h2>
      <p>
        Blockchain technology can be used to safely sotre confidential medical
        data of all forms
      </p>
      <Button variant="contained" color="primary" href={uri.login}>
        Login
      </Button>
      <Button variant="contained" color="primary" href={uri.signup}>
        Signup
      </Button>
      <br />
      <h2>Why store data with us</h2>
      <Card color="inherit" variant="outlined">
        <CardContent>
          <h2> Files are backed up in our network using IPFS</h2>
        </CardContent>
      </Card>
      <Card color="inherit" variant="outlined">
        <CardContent>
          <h2> Storage using cryptographic identifiers</h2>
        </CardContent>
      </Card>
      <Card color="inherit" variant="outlined">
        <CardContent>
          <h2> Limits alteration to authorized parties only</h2>
        </CardContent>
      </Card>

      <FacebookIcon />
      <TwitterIcon />
      <LinkedInIcon />
    </div>
  );
}
