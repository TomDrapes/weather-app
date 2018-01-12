import React from 'react';

const ForecastListItem = (props) => {    
    //const imageURL = video.snippet.thumbnails.default.url;
    const icon_url = `http://openweathermap.org/img/w/${props.forecast.weather[0].icon}.png`;
    var d = props.forecast.dt_txt.split(" ", 1);
    var date = new Date(d[0]);
    var day = '';
    switch (date.getDay()) {
        case 0: day = "Sunday";
        break;
        case 1: day = "Monday";
        break;
        case 2: day = "Tuesday";
        break;
        case 3: day = "Wednesday";
        break;
        case 4: day = "Thursday";
        break;
        case 5: day = "Friday";
        break;
        case 6: day = "Saturday";
        break;
        default: day = "Unknown";
    }
    return (
        <li className="forecast-list-item">
            <div>
                <h5>{day}</h5>
                <div>
                    <img src={icon_url} alt="weather icon"/>
                </div>
                <div>
                    {Math.round(props.forecast.main.temp - 273.15)}&deg;C
                </div>
            </div>
        </li>
    )
};

export default ForecastListItem;