import React from 'react';
import './App.css';
import Watermelon from './images/pic.jpg';
import Text from './components/Text';
import Person from './components/Person';
import Weather from './components/Weather';

const App = () => {
  return (
    <div>

      <h1 className="title">Hello World</h1>
      <h2 id="Header">My First react</h2>
      <img id="watermelonImage" src={Watermelon} alt="Water Melon"/>

      <Text />   
      <Text /> 
      <Text /> 

      <Person personName="Josh" city="Stoke on trent" job="ICT guru" /> 

      <Weather Season="Winter" currentWeather="Raining" temperture={23} /> 

  </div>
  )
}

export default App;