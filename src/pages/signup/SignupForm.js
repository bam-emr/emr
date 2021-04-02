import { Button, TextField, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

export default function SignupForm() {
  const [userType, setUserType] = useState("Patient");
  const [pk, setPk] = useState("");
  const [sk, setSk] = useState("");

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
      <div>
        <p>Your Public key: {pk}</p>
        <p>Your Secret key: {sk}</p>
        <Button variant="contained" color="primary" onClick={() => clearKeys()}>
          Clear
        </Button>
      </div>
    );
  };

  return (
    <form>
      <TextField
        required={true}
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        select
      >
        <MenuItem value="Doctor">Doctor</MenuItem>
        <MenuItem value="Patient">Patient</MenuItem>
      </TextField>
      <Button
        variant="contained"
        color="primary"
        onClick={() => createWallet()}
      >
        Signup
      </Button>

      {showKeys()}
    </form>
  );
}
