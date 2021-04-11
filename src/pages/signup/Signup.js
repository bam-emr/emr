import React, { useContext } from "react";
import { Link, Typography } from "@material-ui/core";
import SignupForm from "./SignupForm";
import uri from "../../api/endpoints";
import "./../../index.scss";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

export default function signup() {
  const history = useHistory();
  const { state } = useContext(AuthContext);
  const { isAuthenticated } = state;

  if (isAuthenticated) {
    history.push(uri.userview);
  }

  return (
    <div>
      <h2 className="signup-title">Sign Up</h2>
      <p className="info-desc">
        For more information about signing up, <br></br>visit our FAQ page
      </p>
      <SignupForm className="info-desc" />
      <div className="line-break"></div>
      <Typography color="inherit">
        Have an account?{" "}
        <Link color="primary" onClick={() => history.push(uri.login)}>
          Login
        </Link>
      </Typography>
    </div>
  );
}
