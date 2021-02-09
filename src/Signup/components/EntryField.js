import React from 'react';
import './../Signup.css';

//Enables user to enter data (first name, last name, email)
export default class EntryField extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        var fieldValue = [this.props.item, event.target.value];
        this.props.handleFormChange(fieldValue)
        }

    render(){
        return(
            <div>         
                <form className = "entry-field"> 
                    <div>
                        <label>
                            {this.props.id}
                        </label>
                    </div>
                    <input 
                        className = "entry-field"
                        type = 'text'
                        onChange= {this.handleChange}
                        value = {this.props.value}
                    />
                </form>
            </div>
        )
    }
}