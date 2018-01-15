import React from 'react';
import ForecastListItem from './forecast_list_item';

const ForecastList = (props) => {
    const forecastItems = props.forecast.filter((data, index) => index !== 0 && index % 8 === 0).map((data) => {
    
        return (
            <ForecastListItem                  
                forecast={data}
                key={data.dt} 
                measurement={props.measurement} />
        );
        
    });

    return (
        <ul className="forecast-list">
            {forecastItems}
        </ul>
    )
};

export default ForecastList;