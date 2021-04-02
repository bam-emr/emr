import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import EMR from "../../images/logo.png";
import uri from "../../api/endpoints";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <img src={EMR} alt="logo" height="50" />
          </div>
          <Button color="inherit" href={uri.home}>
            Home
          </Button>
          <Button color="inherit" href={uri.faq}>
            FAQ
          </Button>
          <Button color="inherit" href={uri.contact}>
            Contact
          </Button>
          <Button color="inherit" href={uri.login}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
