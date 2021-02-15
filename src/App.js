import React from "react";
import{
  Switch,
  Route,
  Link
} from "react-router-dom";
import Doctors from "././Doctors/Doctors.js"
import Patients from "././Patients/Patients.js"
import Signup from "././Signup/Signup.js"
import logo from '././images/logo.png';
import './App.css';

//only needed if we want to pass data upwards
// function searchBarChange(val){
//   alert("search bar value has changed")
// }

export default function App() {
  return (
    <div>
        <img src={logo} className = "logo" alt="logo" />
        <p>
          Welcome to the future of medical data storage.
        </p>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/doctors">Doctors</Link>
                </li>
                <li>
                  <Link to="/patients">Patients</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </nav>
            {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/home"><Home/></Route>
              <Route path="/doctors">
                <Doctors
                  //searchBarChange = {(val) => searchBarChange(val)}
                /> 
              </Route>
              <Route path="/patients"> 
                <Patients/> 
              </Route>
              <Route path="/signup">
                <Signup/>
              </Route>
            </Switch>
          </div>
    </div>
  );
}

//function Patients(){
//  return <h2>Patients</h2>;
//}

function Home(){
  return <h2>Home</h2>;
}


