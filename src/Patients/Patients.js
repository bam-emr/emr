import React from "react";
import SearchResults from "./Components/SearchResults.js"

export default class Patients extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            isSearching: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({isSearching: true});
    }
    render(){
        return( 
        <div>
            <h2>Patients</h2>
            <p> Hi (Patient Name)! </p>
            <p> Welcome to your electronic medical records </p>
            <h2>Search for patient</h2>
            <div>
                {<SearchResults/>}
            </div>
        </div>
        );
    }
}

