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
import _ from 'lodash';

const API_KEY = '23253d7df8c8050b46985a4d8ec2e7dc';
const CURRENT_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const FORECAST_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const COORDS_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const COORDS_5DAY_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {      
      current: {},
      forecast: [],
      latitude: '-33.865143',
      longitude: '151.209900'      
    };
 
    this.getWeather('Brisbane', this.state.latitude, this.state.longitude);
  }

  getWeather(city, lat, lon){
    console.log('lat: ', lat);
    if(lat === undefined){

      const url = `${CURRENT_WEATHER_URL}&q=${city}`;      
      axios.get(url)
        .then((response) => {
          console.log(response.data);        
          this.setState({                 
            current: response.data
          });
      });

      const url2 = `${FORECAST_URL}&q=${city}`;
      axios.get(url2)
      .then((response) => {
        console.log(response.data);        
        this.setState({          
          forecast: response.data.list
        });
      });

    }else{
      
      const url = `${COORDS_URL}&lat=${lat}&lon=${lon}`;
      axios.get(url)
        .then((response) => {
          console.log(response.data);        
          this.setState({                 
            current: response.data
          });
      });

      const url2 = `${COORDS_5DAY_URL}&lat=${lat}&lon=${lon}`;
      axios.get(url2)
        .then((response) => {
          console.log(response.data);        
          this.setState({                 
            forecast: response.data.list
          });
      });
    }

    
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
       (position) => {
          console.log("pos: ", position);
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });      
          this.getWeather('Brisbane', this.state.latitude, this.state.longitude);    
       }
    );    
  }


  render() {
    const getWeather = _.debounce((term) => { this.getWeather(term) }, 300);
    
    return (
      <div className="App">
        <NavBar />
        <div className="title">
          <h2>Current weather and next day forecasts for your city</h2>
          <hr />
          <SearchBar onSearchTermChange={getWeather} />
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
