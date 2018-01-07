import React from 'react';
import WeatherDetails from './weather_details';

const WeatherBox = (props) => {    
    
    return (
       <div className="weatherBox">
         <WeatherDetails 
          temp={props.temp}
          weather={props.weather}
          />
       </div>
    )
};

export default WeatherBox;