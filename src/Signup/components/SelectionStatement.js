import React from 'react';

export default class SelectionStatement extends React.Component{

    render(){
        let userRole;
        if (this.props.role === 1){
            userRole = "doctor"
        }
        else{
            userRole = "patient"
        }
        return(
            <div>         
                <p>The role of {userRole} has been selected</p>
            </div>
        )
    }
}