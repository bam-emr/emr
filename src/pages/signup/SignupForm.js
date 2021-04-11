import {
  Link,
  Button,
  TextField,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React, { useState, useContext } from "react";
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
import { AuthContext } from "../../providers/AuthProvider";
import { useHistory } from "react-router-dom";

import uri from "../../api/endpoints";
import "./../../index.scss";

export default function SignupForm() {
  const [userType, setUserType] = useState("Patient");
  const [pk, setPk] = useState("");
  const [sk, setSk] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");

  const createWallet = () => {
    if (firstName === "" || lastName === "") {
      setErrorMessage("First name or last name is empty");
      return;
    }

    const account = web3.eth.accounts.create();
    const { address, privateKey } = account;
    setPk(address);
    setSk(privateKey);
    dispatch({
      type: "LOGIN",
      payload: {
        pk: account.address,
        sk: account.privateKey,
        firstName: firstName,
        lastName: lastName,
        userType: userType,
      },
    });
  };

  const showKeys = () => {
    if (pk === "" || sk === "") {
      return;
    }
    // TODO show the keys elsewhere
    return (
      <div>
        <p className="displaying-keys1">Generated Login Information</p>
        <p className="displaying-keys2">Your Public Key: {pk}</p>
        <p className="displaying-keys2">Your Private Key: {sk}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push(uri.userview)}
        >
          Continue
        </Button>
      </div>
    );
  };

  const showSignup = () => {
    if (pk !== "" || sk !== "") {
      return;
    }
    return (
      <Button
        className="field"
        variant="contained"
        color="primary"
        onClick={() => createWallet()}
      >
        Sign up
      </Button>
    );
  };

  return (
    <form className="signup-form">
      <Typography color="error">{errorMessage}</Typography>

      <div>
        <TextField
          required
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          variant="outlined"
          color="primary"
          error={errorMessage.length > 0}
        />
        <div className="line-break"></div>
        <TextField
          required
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          variant="outlined"
          color="primary"
          error={errorMessage.length > 0}
        />
      </div>
      <label className="role">
        Select your Role*: &nbsp; &nbsp;
        <TextField
          className="signup-form"
          required={true}
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          select
        >
          <MenuItem value="Doctor">Doctor</MenuItem>
          <MenuItem value="Patient">Patient</MenuItem>
        </TextField>
        {showKeys()}
      </label>
      {showSignup()}
    </form>
  );
}
