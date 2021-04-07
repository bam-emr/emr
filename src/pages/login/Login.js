import React from "react";
import LoginForm from "./LoginForm";
import { Link, Typography } from "@material-ui/core";
import uri from "../../api/endpoints";
import "./../../index.scss";

export default function Login() {
  return (
    <div>
      <h2 className = "signup-title">Login</h2>
      <p className = "info-desc">For information about forgotten <br></br> private keys, visit our FAQ page</p>
      <LoginForm />
      <div>
        <Typography color="inherit">
          No account?{" "}
          <Link color="primary" href={uri.signup}>
            Sign up
          </Link>
        </Typography>
      </div>
    </div>
  );
}
