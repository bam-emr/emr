import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState, useContext } from "react";
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
import "./../../index.scss";
import { AuthContext } from "../../providers/AuthProvider";
import { useHistory } from "react-router-dom";
import uri from "../../api/endpoints";

export default function LoginForm() {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const [pk, setPk] = useState("");
  const [sk, setSk] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const createAccountFromSk = () => {
    if (sk.length != 66) {
      setErrorMessage("Private key is wrong");
      return;
    }
    const account = web3.eth.accounts.privateKeyToAccount(sk);
    // TODO: fetch user role and info before calling dispatch
    dispatch({
      type: "LOGIN",
      payload: {
        pk: account.address,
        sk: account.privateKey,
      },
    });
    // history.push(uri.userHome);
  };

  return (
    <form>
      <Typography color="error">{errorMessage}</Typography>
      <div className="line-break"></div>
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
      <div className="line-break"></div>
      <Button
        className="field"
        variant="contained"
        color="primary"
        onClick={() => createAccountFromSk()}
      >
        Sign in
      </Button>
      <div className="line-break"></div>
    </form>
  );
}
