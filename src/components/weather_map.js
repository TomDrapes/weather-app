import React, {Component} from 'react';
import OpenlayerMap from './openlayer_map';

export default class WeatherMap extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      coords: { lat: 40.7446790, lng: -73.9485420 },      
      zoom: 12,
      icon: ''
      
    }
  
  } 
 
  componentWillReceiveProps(nextProps){
    console.log('nextProps', nextProps);  
    if(!nextProps || !nextProps.data || !nextProps.data.coord || !nextProps.data.weather[0] ||
      !nextProps.data.coord.lat || !nextProps.data.coord.lon || !nextProps.data.weather[0].icon){
      console.log("waiting on nextProps");
    }else{
      console.log("next", nextProps);
      var updatedCoords = { lat: nextProps.data.coord.lat, lng: nextProps.data.coord.lon};    
      this.setState({coords: updatedCoords,
      icon: nextProps.data.weather[0].icon});
      
    }
  }
  

  render() {
    
    
    return (
      <div className='map-box'>                
        <OpenlayerMap map={ this.state.coords } />
      </div>
    )
  }
}

