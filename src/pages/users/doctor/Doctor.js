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
//import uri from "../../api/endpoints";
//import "./../../index.scss";
import { AuthContext } from "../../../providers/AuthProvider";
import DisplayFiles from "../components/DisplayFiles";

export default function Doctor() {
  const [doctorName, setDoctorName] = useState("");
  const [patientPk, setPatientPk] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [clickedSearch, setClickedSearch] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [currentFiles, setCurrentFiles] = useState([]);
  const { state } = useContext(AuthContext);
  const { firstName } = state;

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("File", selectedFile);

    // TODO: send it to ipfs
    fetch("ipfs_link", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    setDoctorName(firstName);

    setCurrentFiles([
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
  }, [firstName]);

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
          Electronic Medical Records of [{patientPk}]
        </h1>
        <DisplayFiles file={currentFiles} />
        <h1 className="search-results">Upload New EMR</h1>
        <div>
          <input type="file" name="file" onChange={changeHandler} />
          {isFilePicked ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{" "}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
          <div>
            <button onClick={handleSubmission}>Submit</button>
          </div>
        </div>
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
