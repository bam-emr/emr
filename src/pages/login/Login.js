import React from "react";
import LoginForm from "./LoginForm";
import { Link, Typography } from "@material-ui/core";
import uri from "../../api/endpoints";

export default function Login() {
  return (
    <div>
      <h2>Login</h2>
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
