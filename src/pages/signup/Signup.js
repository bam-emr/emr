import React from "react";
import { Link, Typography } from "@material-ui/core";
import SignupForm from "./SignupForm";
import uri from "../../api/endpoints";
import "./../../index.scss";

export default function signup() {
  return (
    <div>
      <h2 className = "signup-title">Sign Up</h2>
      <p className = "info-desc">For more information about signing up, <br></br>visit our FAQ page</p>
      <SignupForm className = "info-desc"/>
      <div className = "line-break"></div>
      <Typography color="inherit">
        Have an account?{" "}
        <Link color="primary" href={uri.login}>
          Login
        </Link>
      </Typography>
    </div>
  );
}
