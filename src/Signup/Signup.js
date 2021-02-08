import React from "react";
import EntryField from "./components/EntryField.js";
import Dropdown from 'react-bootstrap/Dropdown';
import SelectionStatement from "./components/SelectionStatement.js";
import Continue from "./components/Continue.js"
//import { Alert } from "bootstrap";

export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            forms: [
                {id: 'First Name', value: ''},
                {id: 'Last Name', value: ''},
                {id: 'Email', value: ''}],
            role: 0
        }
        this.handleClickRole = this.handleClickRole.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFormChange(fieldValue){
        let forms = this.state.forms;
        //alert(forms.fieldValue[0]);
        forms[forms.indexOf(fieldValue[0])].value = fieldValue[1]
        this.setState({forms});

        //this.setState({forms});
    }

    handleClickRole(event){
        event.preventDefault();
        if (String(event.target).endsWith("doctor")){
            let role = this.state.role;
            role = 1
            this.setState({role});
    }
        else{
            let role = this.state.role;
            role = 2
            this.setState({role});
        }
    }
    render(){
        return( 
            <div>
                <h2>Sign Up</h2>
                <p> Select between signing up as a medical doctor or a patient </p>
                <div>
                    {this.state.forms.map(item => (
                        <li key={item.id}>
                            <EntryField
                                item = {item}
                                id = {item.id}
                                value = {item.value}
                                handleFormChange = {(fieldValue) => this.handleFormChange(fieldValue)}
                            />
                        </li>
                    ))}
                </div>  
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Account Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/patient" onClick={this.handleClickRole}>Patient</Dropdown.Item>
                        <Dropdown.Item href="/doctor" onClick={this.handleClickRole}>Doctor</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div>
                    {this.state.role !== 0 &&
                        <SelectionStatement
                            role = {this.state.role}
                        /> 
                    }
                </div>
                <div>
                    <Continue/>
                </div>
            </div>
        );
    }
}

