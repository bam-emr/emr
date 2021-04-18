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
//import uri from "../../api/endpoints";
//import "./../../index.scss";
import { AuthContext } from "../../../providers/AuthProvider";

export default function Doctor() {
  const [doctorName, setDoctorName] = useState("");
  const [patientPk, setPatientPk] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [clickedSearch, setClickedSearch] = useState(false);
  const [newFile, setNewFile] = useState(null);
  const [oldFiles, setOldFiles] = useState([emr1, emr2]);
  const { state } = useContext(AuthContext);
  const { firstName } = state;

  useEffect(() => {
    setDoctorName(firstName);
  }, [firstName]);

  const showRecords = () => {
    const listEMRs = oldFiles.map((file) => (
      <div>
        <li className="list" key={file.toString()}>
          {file}
        </li>
        <Button
          className="view-button"
          variant="contained"
          color="primary"
          onClick={() => setClickedSearch(true)}
        >
          View
        </Button>
        <hr></hr>
      </div>
    ));
    return <ol>{listEMRs}</ol>;
  };
  const getRecords = () => {
    if (clickedSearch === false) {
      return (
        <div>
          <br></br>
          <h className="search-results">
            Please enter a valid patient public key.
          </h>
        </div>
      );
    }
    return (
      <div>
        <div className="minor-break"></div>
        <h1 className="search-results">
          <b>Result:</b>[Patient Name]'s Electronic Medical Records
        </h1>
        {showRecords()}
        <h1 className="search-results">Upload New EMR for [Patient Name]</h1>
        <form>
          <input
            type="file"
            value={newFile}
            onChange={(e) => setNewFile(e.target.files[0])}
          />
          <div className="minor-break"></div>
        </form>
      </div>
    );
  };
  return (
    <div>
      <body>
        <h2 className="welcome-user1">Hello Dr.{doctorName}! </h2>
        <h2 className="welcome-user2">
          Welcome to your electronic medical records
        </h2>
        <p className="search-patient">Search for Patient</p>
      </body>
      <div className="major-break"></div>
      <br></br>
      <TextField
        className="search-bar-ppk"
        label="Patient Public Key"
        value={patientPk}
        onChange={(e) => setPatientPk(e.currentTarget.value)}
        variant="outlined"
        color="primary"
        error={errorMessage.length > 0}
      />
      <div className="line-break"></div>
      <Button
        className="search-button-ppk"
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
