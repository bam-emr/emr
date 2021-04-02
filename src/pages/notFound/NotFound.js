import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

export default function NotFound() {
  const history = useHistory();

  return (
    <div>
      <h2>Sorry this page is not found</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/")}
      >
        Go Back
      </Button>
    </div>
  );
}
