import React from 'react';

const WeatherDetails = (props) => {    
    if(!props.temp){
      return <div>Loading...</div>
    }else{
      var tempC = Math.round(props.temp - 273.15);
      var icon_url = `http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`;
    }
    return (
       <div className="weatherDetails">
         <img className="weatherIcon" src={icon_url} width="200px" height="200px"/>
         <div className="weatherType">{props.weather.weather[0].main}</div>
         <div className="temperature">{tempC}&deg;C</div>
       </div>
    )
};

export default WeatherDetails;