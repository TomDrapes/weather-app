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
    
    if(!nextProps.data){
      console.log("waiting on nextProps");
    }else{
      //console.log("next", nextProps);
      var updatedCoords = { lat: nextProps.data.coord.lat, lng: nextProps.data.coord.lon};    
      this.setState({coords: updatedCoords,
      icon: nextProps.data.weather[0].icon});
      
    }
  }
  

  render() {
    
    
    return (
      <div>                
        <OpenlayerMap map={ this.state.coords } />
      </div>
    )
  }
}

