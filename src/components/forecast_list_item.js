import React from 'react';

const ForecastListItem = (props) => {    
    //const imageURL = video.snippet.thumbnails.default.url;
    const icon_url = `http://openweathermap.org/img/w/${props.forecast.weather[0].icon}.png`;
    return (
        <li className="forecast-list-item">
            <div>
                {props.forecast.dt_txt}
                <div>
                    <img src={icon_url} />
                </div>
                <div>
                    {Math.round(props.forecast.main.temp - 273.15)}
                </div>
            </div>
        </li>
    )
};

export default ForecastListItem;