import React from 'react';

const WeatherDetails = (props) => {    
    if(!props.current.weather){
      return <div>Loading...</div>
    }else{                  
      var tempC = Math.round(props.current.main.temp - 273.15);
      var icon_url = `http://openweathermap.org/img/w/${props.current.weather[0].icon}.png`;
    }
    return (
       <div className="weatherDetails">
         <img className="weatherIcon" src={icon_url} width="50px" height="50px"/>
         <div className="weatherType">{props.current.weather[0].main}</div>
         <div className="temperature">{tempC}&deg;C</div>
       </div>
    )
};

export default WeatherDetails;