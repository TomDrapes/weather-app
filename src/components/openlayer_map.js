import React, {Component} from 'react';

import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import Tile from 'ol/layer/tile';
import OSM from 'ol/source/osm';
import XYZ from 'ol/source/xyz';

class OpenlayerMap extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      coords: { lat: -27.470125, lng: 153.021072 },      
      map: {},
      color: '#eee',
      map_menu: {
          t: 'rgb(238, 168, 103)',
          w: '#eee',
          c: '#eee',
          prec: '#eee',
          pres: '#eee'
      }
    }    

    this.wind = new XYZ({url: 'http://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=23253d7df8c8050b46985a4d8ec2e7dc'});
    this.clouds = new XYZ({url: 'http://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=23253d7df8c8050b46985a4d8ec2e7dc'});
    this.pressure = new XYZ({url: 'http://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=23253d7df8c8050b46985a4d8ec2e7dc'});
    this.temp = new XYZ({url: 'http://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=23253d7df8c8050b46985a4d8ec2e7dc'});
    this.precipitation = new XYZ({url: 'http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=23253d7df8c8050b46985a4d8ec2e7dc'});

    this.changeLayer = this.changeLayer.bind(this);
  } 

  createMap(map, lat, lon){
      this.setState({
        map: new Map({
            view: new View({
                projection:'EPSG:4326',
                center: [lon, lat],
                zoom: 3,
                minZoom: 2,
                extent: [-180, -30, 180, 30]            
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
        })
      })
    
  }

  changeLayer(variant){
    switch(variant){
        case 'w': this.state.map.getLayers().getArray()[1].setSource(this.wind);
        this.setState({map_menu: {t:'#eee', w:'rgb(238, 168, 103)', c:'#eee', prec:'#eee', pres:'#eee'}})
        break;
        case 'c': this.state.map.getLayers().getArray()[1].setSource(this.clouds);
        this.setState({map_menu: {t:'#eee', w:'#eee', c:'rgb(238, 168, 103)', prec:'#eee', pres:'#eee'}})
        break;
        case 'pres': this.state.map.getLayers().getArray()[1].setSource(this.pressure);
        this.setState({map_menu: {t:'#eee', w:'#eee', c:'#eee', prec:'#eee', pres:'rgb(238, 168, 103)'}})
        break;
        case 't': this.state.map.getLayers().getArray()[1].setSource(this.temp);
        this.setState({map_menu: {t:'rgb(238, 168, 103)', w:'#eee', c:'#eee', prec:'#eee', pres:'#eee'}})
        break;
        case 'prec': this.state.map.getLayers().getArray()[1].setSource(this.precipitation);
        this.setState({map_menu: {t:'#eee', w:'#eee', c:'#eee', prec:'rgb(238, 168, 103)', pres:'#eee'}})
        break;
        default: this.state.map.getLayers().getArray()[1].setSource(this.temp);
        this.setState({map_menu: {t:'rgb(238, 168, 103)', w:'#eee', c:'#eee', prec:'#eee', pres:'#eee'}})
        break;
    }
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
        <div className="map-menu">
            <div className="map-menu-item" onClick={() => this.changeLayer('t')} style={{background: this.state.map_menu.t}}>Temperature</div>
            <div className="map-menu-item" onClick={() => this.changeLayer('prec')} style={{background: this.state.map_menu.prec}}>Precipitation</div>
            <div className="map-menu-item" onClick={() => this.changeLayer('pres')} style={{background: this.state.map_menu.pres}}>Pressure</div>
            <div className="map-menu-item" onClick={() => this.changeLayer('c')} style={{background: this.state.map_menu.c}}>Clouds</div>
            <div className="map-menu-item" onClick={() => this.changeLayer('w')} style={{background: this.state.map_menu.w}}>Wind</div>
        </div>
    </div> )
  }
}

export default OpenlayerMap;