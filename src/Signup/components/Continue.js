import React from 'react';

export default function Continue({handleClick}){
    function click(){
        alert("hi");
    }
    return(
        <button onClick = {click}>
            Continue
        </button>
    )
}