import React, { Component } from 'react';
import '../style/App.css';
//import './navbar.js';
import NavBar from './navbar.js';
import WeatherBox from './weather_box';
import ForecastList from './forecast_list';
import WeatherMap from './weather_map';
import SearchBar from './search_bar';
import Footer from './footer';
import axios from 'axios';

const API_KEY = '23253d7df8c8050b46985a4d8ec2e7dc';
const CURRENT_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const FORECAST_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {      
      current: {},
      forecast: [],
      coords: {}      
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

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
       (position) => {
          console.log("pos: ", position);
          this.setState({
            coords: { lat: position.coords.latitude, lon: position.coords.longitude }
          });          
       }
    );    
  }


  render() {
    return (
      
      <div className="App">
        <NavBar />
        <div className="title">
          <h2>Current weather and 5 day forecasts for your city</h2>
          <hr />
          <SearchBar />
        </div>
        <WeatherBox                     
          current={this.state.current}
        />
        <WeatherMap data={this.state.current}/>
        <ForecastList forecast={this.state.forecast} />
        <Footer />
      </div>
    );
  }
}

export default App;
