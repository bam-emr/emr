import { Link, Button, TextField, MenuItem, Typography } from "@material-ui/core";
import React, { useState } from "react";
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

import uri from "../../api/endpoints";
import "./../../index.scss";

export default function SignupForm() {
  const [userType, setUserType] = useState("Patient");
  const [pk, setPk] = useState("");
  const [sk, setSk] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const createWallet = () => {
    const account = web3.eth.accounts.create();
    const { address, privateKey } = account;
    setPk(address);
    setSk(privateKey);
  };

  const clearKeys = () => {
    setPk("");
    setSk("");
  };

  const showKeys = () => {
    if (pk === "" || sk === "") {
      return;
    }
    return (
      <div >
        <p className = "displaying-keys1">Generated Login Information</p>
        <p className = "displaying-keys2">Your Public Key: {sk}</p>
        <p className = "displaying-keys2">Your Private Key: {sk}</p>
          {/* <Button variant="contained" color="primary" onClick={() => clearKeys()} >
            Clear
          </Button> */}
      </div>
    );
  };

  const showContinue = () => {
    if (pk === "" || sk === "") {
      return;
    }
    return (
      <div>
        <Link href={uri.userview}>
          <Button variant="contained" color="primary">
            Continue
          </Button>
        </Link>
      </div>
    );
  };

  const showSignup = () => {
    if (pk !== "" || sk !== "") {
      return;
    }
    return (
      <Button
        className = "field"
        variant="contained"
        color="primary"
        onClick={() => createWallet()}
      >
        Sign up
      </Button>
    );
  };

  return (
      
    <form className = "signup-form">
      <div >
      <TextField
        required
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        variant="outlined"
        color="primary"
      />
      <div className = "line-break"></div>
      <TextField

        required
        label="Last Name"
        value={lastName}
        onChange={(e) =>setLastName(e.target.value)}
        variant="outlined"
        color="primary"
      />
      </div>
      <label className = "role">
        Select your Role*: &nbsp; &nbsp; 
      <TextField
        className = "signup-form"
        required={true}
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        select
      >
        <MenuItem value="Doctor">Doctor</MenuItem>
        <MenuItem value="Patient">Patient</MenuItem>
      </TextField>
      {showKeys()}
      {showContinue()}
      </label>
      {showSignup()}
    </form>
  );
}
