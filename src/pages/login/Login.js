import React, { useContext } from "react";
import LoginForm from "./LoginForm";
import { Link, Typography } from "@material-ui/core";
import uri from "../../api/endpoints";
import "./../../index.scss";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

export default function Login() {
  const history = useHistory();
  const { state } = useContext(AuthContext);
  const { isAuthenticated } = state;

  if (isAuthenticated) {
    history.push(uri.userview);
  }

  return (
    <div>
      <h2 className="signup-title">Login</h2>
      <p className="info-desc">
        For information about forgotten <br></br> private keys, visit our FAQ
        page
      </p>
      <LoginForm />
      <div>
        <Typography color="inherit">
          No account?{" "}
          <Link color="primary" onClick={() => history.push(uri.signup)}>
            Sign up
          </Link>
        </Typography>
      </div>
    </div>
  );
}
