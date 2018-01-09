import React from 'react';

const WeatherDetails = (props) => {    
    if(!props.current.weather){
      return <div>Loading...</div>
    }else{                  
      var tempC = Math.round(props.current.main.temp - 273.15);
      var tempMax = Math.round(props.current.main.temp_max -273.15);
      var tempMin = Math.round(props.current.main.temp_min -273.15);
      var icon_url = `http://openweathermap.org/img/w/${props.current.weather[0].icon}.png`;
      var date = new Date();
      var day = '';
      switch (date.getDay()) {
        case 0: day = "Sunday";
        break;
        case 1: day = "Monday";
        break;
        case 2: day = "Tuesday";
        break;
        case 3: day = "wednesday";
        break;
        case 4: day = "Thursday";
        break;
        case 5: day = "Friday";
        break;
        case 6: day = "Saturday";
        break;        
        default: day = "Unknown";        
      }
    }
    return (
       <div className="weatherDetails">
         <h4>Weather in {props.current.name}, {props.current.sys.country}</h4>
         <h5>{day}: <img className="weatherIcon" src={icon_url} width="50px" height="50px" alt="weather icon"/> {tempC}&deg;C </h5>                          
         
         <table className="weather-table">
           <tbody>
             <tr className="weather-item-detail">
               <td>Humidity</td>
               <td>{props.current.main.humidity}%</td>
             </tr>
             <tr className="weather-item-detail">
               <td>Pressure</td>
               <td>{props.current.main.pressure} hpa</td>
             </tr>
             <tr className="weather-item-detail">
               <td>Wind</td>
               <td>{props.current.weather[0].description}, {props.current.wind.speed} m/s</td>
             </tr>
             <tr className="weather-item-detail">
               <td>Daily Maximum</td>
               <td>{tempMax}&deg;C</td>
             </tr>
             <tr className="weather-item-detail">
               <td>Daily Minimum</td>
               <td>{tempMin}&deg;C</td>
             </tr>
             <tr className="weather-item-detail">
               <td>Latitude</td>
               <td>{props.current.coord.lat}</td>
             </tr>
             <tr className="weather-item-detail">
               <td>Longitude</td>
               <td>{props.current.coord.lon}</td>
             </tr>
           </tbody>
         </table>         
       </div>
    )
};

export default WeatherDetails;