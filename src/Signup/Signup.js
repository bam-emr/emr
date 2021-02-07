import React from "react";
import EntryField from "./components/EntryField.js";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            forms: [
                {id: 'First Name', value: ''},
                {id: 'Last Name', value: ''},
                {id: 'Email', value: ''}],
            role: false
        }
    }

    createVarField(i){
      return(
        <div>
            <EntryField //below are the props
              i={i} 
              handlChange = {(val) => this.handlChange(val)}//{(input) => this.setState({input})}
            />
          </div>
      );
    }

    render(){
        return( 
            <div>
                <h2>Sign Up</h2>
                <p> Select between signing up as a medical doctor or a patient </p>
                <div>
                    {this.state.forms.map(item => (
                        <li key={item.id}>
                            <form>
                                <label>
                                    {item.id}
                                    <input
                                        type = 'text'
                                        onChange = {this.handleChange}
                                        value = {this.state.forms.value}
                                    />
                                </label>
                            </form>
                        </li>
                    ))}
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Account Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Patient</Dropdown.Item>
                        <Dropdown.Item>Doctor</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

