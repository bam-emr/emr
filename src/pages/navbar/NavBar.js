import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import EMR from "../../images/logo.png";
import uri from "../../api/endpoints";
import { AuthContext } from "../../providers/AuthProvider";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  color: "white",
  root: {
    flexGrow: 1,
    backgroundColor: "black",
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "black",
    color: "black",
  },
  title: {
    flexGrow: 1,
    backgroundColor: "black",
    color: "black",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const { state, dispatch } = useContext(AuthContext);
  const { isAuthenticated } = state;
  const history = useHistory();

  // TODO: bug where it doesnt push to home when login, probably some async
  const renderLoginLogout = () => {
    if (isAuthenticated) {
      return (
        <Button
          color="inherit"
          onClick={() =>
            dispatch({
              type: "LOGOUT",
            }) && history.push(uri.home)
          }
        >
          Logout
        </Button>
      );
    }

    return (
      <Button color="inherit" onClick={() => history.push(uri.login)}>
        Login
      </Button>
    );
  };

  return (
    <div
      className={classes.root}
      style={{
        color: "blue",
      }}
    >
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#009fcf" }}>
          <div className={classes.title} onClick={() => history.push(uri.home)}>
            <img className="logo" src={EMR} alt="logo" height="50" />
          </div>
          {isAuthenticated && (
            <Button color="inherit" onClick={() => history.push(uri.userview)}>
              Home
            </Button>
          )}
          <Button color="inherit" onClick={() => history.push(uri.faq)}>
            FAQ
          </Button>
          <Button color="inherit" onClick={() => history.push(uri.contact)}>
            Contact
          </Button>
          {renderLoginLogout()}
        </Toolbar>
      </AppBar>
    </div>
  );
}
