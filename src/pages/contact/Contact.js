import React,{ useState, useContext } from "react";
import {
  Link,
  Button,
  TextField,
  MenuItem,
  Typography,
} from "@material-ui/core";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  return( 
    <div>
      <h2 className="welcome">Contact Us</h2>
      <div className = "minor-break"></div>
      <div className = "minor-break"></div>
      <div className = "minor-break"></div>
      <div className = "minor-break"></div>
      <div className = "minor-break"></div>

      <div>
        <TextField
          required
          label="Name"
          value={firstName}
          //onChange={(e) => setFirstName(e.target.value)}
          variant="outlined"
          color="primary"
        />
        <div className="line-break"></div>
        <TextField
          required
          label="Email"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          variant="outlined"
          color="primary"
        />
        <div className="line-break"></div>
        <TextField
          required
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          color="primary"
        />
        <div className="line-break"></div>
        <Button
        className="field"
        variant="contained"
        color="primary"
      >
        Send Message
      </Button>
      </div>
    </div>
  
  
  );
}
