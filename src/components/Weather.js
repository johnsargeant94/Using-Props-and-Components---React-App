import React from 'react';

const Weather = (props) => {
    return (
    <div>   
        <h1>Season</h1>
        <h3>{props.Season}</h3>
        <h1>Current Weather</h1>
        <h3>{props.currentWeather}</h3>
        <h1>temperature</h1>
        <h3>{props.temperture} </h3>
    </div>
  
     )
}


export default Weather;