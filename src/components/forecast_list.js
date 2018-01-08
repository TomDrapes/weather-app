import React from 'react';
import ForecastListItem from './forecast_list_item';

const ForecastList = (props) => {
    const forecastItems = props.forecast.filter((data, index) => index % 8 === 0).map((data) => {
    //const forecastItems = props.forecast.map((data, index) => {
        //if(index % 8 === 0){
            return (
                <ForecastListItem                  
                    forecast={data}
                    key={data.dt} />
            );
        //}
    });

    return (
        <ul className="forecast-list">
            {forecastItems}
        </ul>
    )
};

export default ForecastList;