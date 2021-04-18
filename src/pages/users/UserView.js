import React, { useContext } from "react";
import Doctor from "./doctor/Doctor.js";
import {
  Link,
  Button,
  TextField,
  MenuItem,
  Typography,
} from "@material-ui/core";
import Patient from "./patient/Patient";
//import uri from "../../api/endpoints";
import "./../../index.scss";
import { AuthContext } from "../../providers/AuthProvider";

export default function UserView() {
  const { state } = useContext(AuthContext);
  const { userType, firstName, lastName } = state;
  return (
    <div>
      {userType === "Patient" ? <Patient /> : <Doctor />}
    </div>
  );
}
