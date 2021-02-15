import React from 'react';
import './../Patients.css';

export default class SearchResults extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //actual records should be passed down as props or fetched within this component
            medicalRecords: [{id: "generalcheckup.pdf", value: "sadkaskdak"}, {id: "bloodtestresults.csv", value: "qjwejwjkjkk"}, {id: "xray.img", value: "mkjjsaodsoadoj"}],
            doctors: [{id: "1", value: "Smith"}, {id: "2", value: "Jane"}]
        }
    }

    componentDidMount(){
        //here is where we set up subscriptions
        //alert("SearchResults.js component has mounted")
    }
    handleClick(item, event){
        event.preventDefault();
        alert(item.id);
    }

    render(){
        return(
            <div>
                <p>dfsdfsd</p>
                {this.state.medicalRecords.map(item => (
                    <li key = {item.id}>
                        <p>{item.id}</p>
                        <form onSubmit={this.handleSubmit}>
                            <label>Give permission to Doctor:
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
                        <button onClick = {(event) => this.handleClick(item, event)}>
                            View EMR 
                        </button>
                    </li>
                ))}
            </div>
        )
    }
}