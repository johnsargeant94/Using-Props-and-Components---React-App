import React from 'react';

const Person = (props) => {
    return (
    <div>   
        <h1>Name: {props.personName}</h1>
        <p>City: {props.city}</p>
        <p>Job : {props.job}</p>
    
    
    </div>
  
     )
}

export default Person;