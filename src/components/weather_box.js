import React from 'react';
import WeatherDetails from './weather_details';

const WeatherBox = (props) => {    
    
    return (
       <div className="weatherBox">
         <WeatherDetails 
            current={props.current}
            measurement={props.measurement}
          />          
       </div>
    )
};

export default WeatherBox;