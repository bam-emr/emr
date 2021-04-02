import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

export default function LoginForm() {
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
    <form>
      <Typography color="error">{errorMessage}</Typography>
      <TextField
        required
        label="Pivate Key"
        type="password"
        value={sk}
        onChange={(e) => setSk(e.currentTarget.value)}
        variant="outlined"
        color="primary"
        error={errorMessage.length > 0}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => createAccountFromSk()}
      >
        Sign in
      </Button>
    </form>
  );
}
