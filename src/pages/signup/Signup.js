import React from "react";
import { Link, Typography } from "@material-ui/core";
import SignupForm from "./SignupForm";
import uri from "../../api/endpoints";

export default function signup() {
  return (
    <div>
      <h2>Signup</h2>
      <SignupForm />
      <Typography color="inherit">
        Have an account?{" "}
        <Link color="primary" href={uri.login}>
          Login
        </Link>
      </Typography>
    </div>
  );
}
