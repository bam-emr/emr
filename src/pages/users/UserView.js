import React from "react";
import Doctor from "./doctor/Doctor.js"
import { Link, Button, TextField, MenuItem, Typography } from "@material-ui/core";
import Patient from "./patient/Patient";
import uri from "../../api/endpoints";
import "./../../index.scss";

export default function UserView() {
  return (<div>
    {/* <Doctor/> */}
    <Patient/>
  </div>);
}
