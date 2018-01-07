import React from 'react';
import ForecastListItem from './forecast_list_item';

const ForecastList = (props) => {
    const forecastItems = props.forecast.map((data) => {
        return (
            <ForecastListItem                  
                forecast={data}
                key={data.dt} />
        );
    });

    return (
        <ul className="">
            {forecastItems}
        </ul>
    )
};

export default ForecastList;