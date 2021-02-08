import React from 'react';

export default class EntryField extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        var fieldValue = [this.props.item, event.target.value];
        //alert('A value was submitted:' + fieldValue[0].id);
        this.props.handleFormChange(fieldValue)
        }

    render(){
        return(
            <div>         
                <form> 
                    <label>
                            {this.props.id}
                        <input 
                            type = 'text'
                            onChange= {this.handleChange}
                            value = {this.props.value}
                        />
                    </label>
                </form>
            </div>
        )
    }
}