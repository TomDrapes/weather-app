import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';
import './navbar.js';
import NavBar from './navbar.js';
import WeatherBox from './weather_box';
import axios from 'axios';

const API_KEY = '23253d7df8c8050b46985a4d8ec2e7dc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
//var city = 'Brisbane'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: '',
      weather: {}
    };

    this.getTemp('Brisbane');
    this.getTemp = this.getTemp.bind(this);
  }

  getTemp(city) {
    const url = `${ROOT_URL}&q=${city},au`;
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.list[0].main.temp);
        this.setState({
          temp: response.data.main.temp,
          weather: response.data
        });
    });
  }

  render() {
    return (
      
      <div className="App">
        <NavBar />  
        <WeatherBox 
          temp={this.state.temp}
          weather={this.state.weather}
        />
      </div>
    );
  }
}

export default App;
