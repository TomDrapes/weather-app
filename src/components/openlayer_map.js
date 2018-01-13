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
      map: {}
    }    
  } 

  createMap(map, lat, lon){
      this.setState({
        map: new Map({
            view: new View({
                projection:'EPSG:4326',
                center: [lon, lat],
                zoom: 5
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

  componentDidMount(map) {
    this.createMap(map, this.state.coords.lat, this.state.coords.lng);
  }     

  componentWillReceiveProps(nextProps){
    //console.log("map: ", this.state.map);
    console.log(nextProps.map);
    this.state.map.getView().setCenter([nextProps.map.lng, nextProps.map.lat]);
    //console.log("this: ", this.state.map.getView().getCenter());
    //this.setState({ map: updatedMap });
    
  }

  render() {        
    return ( <div id="map"></div> )
  }
}

export default OpenlayerMap;