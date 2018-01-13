import React, {Component} from 'react';

import 'ol/ol.css';
import ol from 'ol';
import Map from 'ol/map';
import View from 'ol/view';
import Tile from 'ol/layer/tile';
import OSM from 'ol/source/osm';
import XYZ from 'ol/source/xyz';
import proj from 'ol/proj';


class OpenlayerMap extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      coords: { lat: -27.470125, lng: 153.021072 },      
      map: {},
      color: '#eee'
    }    

    this.changeLayer = this.changeLayer.bind(this);
  } 

  createMap(map, lat, lon){
      this.setState({
        map: new Map({
            view: new View({
                projection:'EPSG:4326',
                center: [lon, lat],
                zoom: 3,
                minZoom: 2
            }),
            layers: [
                new Tile({
                    source: new OSM()
                }),
                new Tile({
                  source: new XYZ({
                    url: 'http://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=23253d7df8c8050b46985a4d8ec2e7dc'
                  })
                })
            ],
            target: 'map'
        })
      })
    
  }

  changeLayer(variant){
    var wind = new XYZ({url: 'http://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=23253d7df8c8050b46985a4d8ec2e7dc'});
    var clouds = new XYZ({url: 'http://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=23253d7df8c8050b46985a4d8ec2e7dc'});
    var pressure = new XYZ({url: 'http://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=23253d7df8c8050b46985a4d8ec2e7dc'});
    var temp = new XYZ({url: 'http://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=23253d7df8c8050b46985a4d8ec2e7dc'});
    var precipitation = new XYZ({url: 'http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=23253d7df8c8050b46985a4d8ec2e7dc'});

    switch(variant){
        case 'w': this.state.map.getLayers().getArray()[1].setSource(wind);
        break;
        case 'c': this.state.map.getLayers().getArray()[1].setSource(clouds);
        break;
        case 'pres': this.state.map.getLayers().getArray()[1].setSource(pressure);
        break;
        case 't': this.state.map.getLayers().getArray()[1].setSource(temp);
        break;
        case 'prec': this.state.map.getLayers().getArray()[1].setSource(precipitation);
        break;
    }

    /*this.state.map.getLayers().getArray()[1].setSource(wind);
    this.setState({
        color: 'orange'
    }) */   
  }

  componentDidMount(map) {
    this.createMap(map, this.state.coords.lat, this.state.coords.lng);
  }     

  componentWillReceiveProps(nextProps){        
    this.state.map.getView().setCenter([nextProps.map.lng, nextProps.map.lat]);        
  }

  render() {        
    return ( 
    <div>
        <div id="map"></div>
        <div class="map-menu">
            <div class="map-menu-item" onClick={() => this.changeLayer('t')} style={{background: this.state.color}}>Temperature</div>
            <div class="map-menu-item" onClick={() => this.changeLayer('prec')} style={{background: this.state.color}}>Precipitation</div>
            <div class="map-menu-item" onClick={() => this.changeLayer('pres')} style={{background: this.state.color}}>Pressure</div>
            <div class="map-menu-item" onClick={() => this.changeLayer('c')} style={{background: this.state.color}}>Clouds</div>
            <div class="map-menu-item" onClick={() => this.changeLayer('w')} style={{background: this.state.color}}>Wind</div>
        </div>
    </div> )
  }
}

export default OpenlayerMap;