import React from 'react';
import WeatherDetails from './weather_details';

const WeatherBox = (props) => {    
    
    return (
       <div className="weatherBox">
         <WeatherDetails 
            current={props.current}
          />
       </div>
    )
};

export default WeatherBox;