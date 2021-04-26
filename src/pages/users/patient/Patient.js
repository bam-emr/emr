import {
  Link,
  Button,
  TextField,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import sampleEmrPdf from "../../../sampledata/sample1EMR.pdf";
import sampleEmrImg from "../../../sampledata/sample2EMR.png";
import uri from "../../../api/endpoints";
import { AuthContext } from "../../../providers/AuthProvider";
import DisplayFiles from "../components/DisplayFiles";

export default function Patient() {
  const [patientName, setPatientName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [doctorPk, setDoctorPk] = useState("");
  const [files, setFiles] = useState([]);
  const { state } = useContext(AuthContext);
  const { firstName } = state;

  useEffect(() => {
    setPatientName(firstName);

    setFiles([
      {
        file: sampleEmrPdf,
        searchField: "",
        fileName: "Sample Pdf",
      },
      {
        file: sampleEmrImg,
        searchFiled: "",
        fileName: "Sample image",
      },
      {
        file:
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        searchField: "",
        fileName: "Dummy PDF",
      },
    ]);
  }, [patientName]);

  const showRecords = () => {
    const listEMRs = fileDataRetrieved.map((fileData) => (
      <div>
        <a
          href={fileData.file}
          without
          rel="noopener noreferrer"
          target="_blank"
        >
          <li className="list" key={fileData.fileName}>
            {fileData.fileName}
          </li>
        </a>
        <br />
        <hr />
      </div>
    ));
    return <ol>{listEMRs}</ol>;
  };

  const getRecords = () => {
    return (
      <div>
        <DisplayFiles file={files} />
        <div className="minor-break"></div>
      </div>
    );
  };

  const fetchDoctor = () => {
    // TODO: fetch list of doctors
    setErrorMessage("Doctor not found");
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
      <h1>
        <b>Your Electronic Medical Records:</b>
      </h1>
      <br></br>
      <div className="line-break"></div>
      {getRecords()}

      <h1 className="search-results">
        Give Doctor Permission to View Your Records
      </h1>
      <Typography color="error">{errorMessage}</Typography>

      <TextField
        className="search-bar"
        label="Public Key of Doctor"
        //value={patientName}
        onChange={(e) => setDoctorPk(e.currentTarget.value)}
        variant="outlined"
        color="primary"
        error={errorMessage.length > 0}
      />
      <Button
        className="search-button"
        variant="contained"
        color="primary"
        onClick={() => fetchDoctor()}
      >
        Share Records with Doctor
      </Button>
    </div>
  );
}
