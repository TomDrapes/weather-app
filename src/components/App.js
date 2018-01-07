import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';
import './navbar.js';
import NavBar from './navbar.js';
import WeatherBox from './weather_box';
import ForecastList from './forecast_list';
import axios from 'axios';

const API_KEY = '23253d7df8c8050b46985a4d8ec2e7dc';
const CURRENT_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const FORECAST_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//var city = 'Brisbane'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {      
      current: {},
      forecast: []      
    };

    this.getTemp('Brisbane');
    this.getForecast('Brisbane');    
  }

  getTemp(city) {
    const url = `${CURRENT_WEATHER_URL}&q=${city},au`;
    axios.get(url)
      .then((response) => {
        console.log(response.data);        
        this.setState({                 
          current: response.data
        });
    });
  }

  getForecast(city) {
    const url = `${FORECAST_URL}&q=${city},au`;
    axios.get(url)
      .then((response) => {
        console.log(response.data);        
        this.setState({          
          forecast: response.data.list
        });
    });
  }

  render() {
    return (
      
      <div className="App">
        <NavBar />  
        <WeatherBox                     
          current={this.state.current}
        />
        <ForecastList forecast={this.state.forecast} />
      </div>
    );
  }
}

export default App;
