import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

import 'ol/ol.css';
import ol from 'ol';
import Map from 'ol/map';
import View from 'ol/view';
import Tile from 'ol/layer/tile';
import OSM from 'ol/source/osm';
import XYZ from 'ol/source/xyz';

import OpenlayerMap from './openlayer_map';



const AnyReactComponent = ({ ico }) => <img src={ico} />;


export default class WeatherMap extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      coords: { lat: 40.7446790, lng: -73.9485420 },      
      zoom: 12,
      icon: '',
      map: {}
    }
  
  } 

  componentDidMount() {
    
    /*var map = new Map({
        view: new View({
            center: [this.state.coords.lat, this.state.coords.lng],
            zoom: 3
        }),
        layers: [
            new Tile({
                source: new OSM()
            }),
            new Tile({
              source: new XYZ({
                url: 'http://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=23253d7df8c8050b46985a4d8ec2e7dc'
              })
            })
        ],
        target: 'map'
    });*/
  }

   
 
  componentWillReceiveProps(nextProps){
    
    if(!nextProps.data){
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
      <div>
        {/*<div className='weather-map'>
          <GoogleMapReact
            center={ this.state.coords }
            zoom={ this.state.zoom }>
            <AnyReactComponent
              lat={ this.state.coords.lat }
              lng={ this.state.coords.lng }
              ico={ `http://openweathermap.org/img/w/${this.state.icon}.png` } />
          </GoogleMapReact>              
    </div>*/}

        
        <OpenlayerMap map={ this.state.coords } />
      </div>
    )
  }
}

