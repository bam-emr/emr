import React from "react";
import SearchResults from "./Components/SearchResults.js"

export default class Doctors extends React.Component{
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
            <h2>Doctors</h2>
            <p> Hi (Doctor Name)! </p>
            <p> Welcome to your electronic medical records </p>
            <h2>Search for patient</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Search by Patient ID
                    <input 
                        type="text" 
                        name="name"
                        onChange={this.handleChange} />
                </label>
                <input 
                    type="submit"
                    value="Search"
                />
            </form>
            <div>
                {this.state.isSearching === true && <SearchResults/>}
            </div>
        </div>
        );
    }
}

