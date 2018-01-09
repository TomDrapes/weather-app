import React from 'react';
import logo from '../img/WeatherFx-logo.png';

const NavBar = () => {    
    
    return (
        <div className="navBar">
            <img className="nav-logo" src={logo} width="70px" height="70px" />
            <div className="nav-heading">WeatherFX</div>
            <div className="tempButton">
                <div className="fahrenheit">&deg;F</div>
                <div className="celsius">&deg;C</div>                
            </div>
        </div>
    )
};

export default NavBar;