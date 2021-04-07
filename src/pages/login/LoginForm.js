import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
import "./../../index.scss";

export default function LoginForm() {
  const [pk, setPk] = useState("");
  const [sk, setSk] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const createAccountFromSk = () => {
    if (sk.length != 66) {
      return;
    }
    const account = web3.eth.accounts.privateKeyToAccount(sk);
    console.log(account);
  };

  return (
    <form >
      <Typography color="error">{errorMessage}</Typography>
      <TextField
        
        required
        label="Public Key"
        value={pk}
        onChange={(e) => setPk(e.currentTarget.value)}
        variant="outlined"
        color="primary"
        error={errorMessage.length > 0}
      />
      <div className = "line-break"></div>
      <TextField
        
        required
        label="Private Key"
        type="password"
        value={sk}
        onChange={(e) => setSk(e.currentTarget.value)}
        variant="outlined"
        color="primary"
        error={errorMessage.length > 0}
      />
      <div className = "line-break"></div>
      <Button
        className = "field"
        variant="contained"
        color="primary"
        onClick={() => createAccountFromSk()}
      >
        Sign in
      </Button>
      <div className = "line-break"></div>
    </form>
  );
}
