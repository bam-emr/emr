import { Link, Button, TextField, MenuItem, Typography } from "@material-ui/core";
import React, { useState } from "react";
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
import emr1 from "../../../sampledata/sample1EMR.pdf";
import emr2 from  "../../../sampledata/sample2EMR.png";
//import uri from "../../api/endpoints";
//import "./../../index.scss";

export default function Doctor() {
  const [patientName, setPatientName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [clickedSearch, setClickedSearch] = useState(false);
  const [newFile, setNewFile] = useState(null);
  const [oldFiles, setOldFiles] = useState([emr1, emr2]);


  const showRecords = () =>{
    const listEMRs = oldFiles.map((file) =>
    <div>
      <li className = "list" key = {file.toString()}>
        {file}
      </li>
      <Button
        className = "view-button"
        variant="contained"
        color="primary"
        onClick={() => setClickedSearch(true)}
      >
        View
      </Button>
      <hr></hr>
      </div>);
      return <ol>{listEMRs}</ol>
  }
  const getRecords = () =>{
    if (clickedSearch === false){
      return(
        <div>
          <div className = "minor-bxreak"></div>
          <h className = "search-results">Please enter a valid patient public key!</h>
        </div>
      );
    }
    return(
      <div>
        <div className = "minor-break"></div>
        <h1 className = "search-results"><b>Result:</b>[Patient Name]'s Electronic Medical Records</h1>
        {showRecords()}
        <h1 className = "search-results">Upload New EMR for [Patient Name]</h1>
        <form>
          <input type="file" 
            value={newFile}
            onChange={(e) => setNewFile(e.target.files[0])}
        />
        <div className = "minor-break"></div>

      </form>
      </div>
    );
  }
  return(
    <div>
    <body>
      <h2 className = "welcome-user1">Hello Dr.[name]! </h2>
        <h2 className = "welcome-user2">Welcome to your electronic medical records</h2>
        <p className = "search">
          Search for Patient
        </p>
  
        
    </body>
    <div className = "major-break"></div>
    <TextField
        className = "search-bar"
        label="Patient Public Key"
        value={patientName}
        onChange={(e) => setPatientName(e.currentTarget.value)}
        variant="outlined"
        color="primary"
        error={errorMessage.length > 0}
      />
      <div className = "line-break"></div>
      <Button
        className = "search-button"
        variant="contained"
        color="primary"
        onClick={() => setClickedSearch(true)}
      >
        Search
      </Button>
      {getRecords()}
    </div>
  );
}
