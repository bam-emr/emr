import {
  Link,
  Button,
  TextField,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import emr1 from "../../../sampledata/sample1EMR.pdf";
import emr2 from "../../../sampledata/sample2EMR.png";
import uri from "../../../api/endpoints";
//import "./../../index.scss";
import { AuthContext } from "../../../providers/AuthProvider";

// TODO: fetch list of doctors
export default function Patient() {
  const [patientName, setPatientName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [fileInfo, setFileInfo] = useState([]);
  const { state } = useContext(AuthContext);
  const { firstName } = state;

  useEffect(() => {
    setPatientName(firstName);
  }, [patientName]);

  const fileDataRetrieved = [
    {
      file: emr1,
      searchField: "",
    },
    {
      file: emr2,
      searchFiled: "",
    },
  ];

  const searchForDoctor = (patientName) => {
    return (
      <div>
        <p>No doctor with public key {patientName} was found.</p>
      </div>
    );
  };

  const viewFile = () => {
    return;
  };

  const showRecords = () => {
    const listEMRs = fileDataRetrieved.map((fileData) => (
      <div>
        <li className="list" key={fileData.file.toString()}>
          {fileData.file}
        </li>
        <Button
          className="view-button"
          variant="contained"
          color="primary"
          // onClick={() => setClickedSearch(true)}
        >
          View
        </Button>
        <br></br>
        <br></br>
        <TextField
          className="search-bar"
          label="Doctor Public Key"
          //value={patientName}
          onChange={(e) => setFileInfo([e.currentTarget.value])}
          variant="outlined"
          color="primary"
          error={errorMessage.length > 0}
        />
        <Button
          className="search-button"
          variant="contained"
          color="primary"
          onClick={(patientName) => searchForDoctor(patientName)}
        >
          Share This EMR
        </Button>
        {searchForDoctor()}
        <hr></hr>
      </div>
    ));
    return <ol>{listEMRs}</ol>;
  };
  const getRecords = () => {
    return (
      <div>
        {showRecords()}
        <h1 className="search-results">Give [name] permission to view EMR</h1>
        {/* <form>
          <input type="text" 
            value={newFile}
            onChange={(e) => setNewFile(e.target.files[0])}
        /> */}
        <div className="minor-break"></div>
      </div>
    );
  };
  return (
    <div>
      <body>
        <h2 className="welcome-user1">Hello {patientName}! </h2>
        <h2 className="welcome-user2">
          Welcome to your electronic medical records
        </h2>
      </body>
      <div className="major-break"></div>
      <br></br>
      <br></br>
      <br></br>
      <h1>
        <b>Your Electronic Medical Records:</b>
      </h1>
      <br></br>
      <div className="line-break"></div>
      {getRecords()}
    </div>
  );
}
