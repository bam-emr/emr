import React from 'react';
import './../Doctors.css';

export default class SearchResults extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //actual records should be passed down as props or fetched within this component
            medicalRecords: [{id: "generalcheckuppdf", value: "sadkaskdak"}, {id: "bloodtestresults.csv", value: "qjwejwjkjkk"}, {id: "xray.img", value: "mkjjsaodsoadoj"}]
        }
    }

    componentDidMount(){
        //here is where we set up subscriptions
        alert("SearchResults.js component has mounted")
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
                        <button onClick = {(event) => this.handleClick(item, event)}>
                            View EMR 
                        </button>
                    </li>
                ))}
            </div>
        )
    }
}