import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';

const icon_bubble = require('@common/assets/images/map/speech_bubble.png');
const icon_satellite = require('@common/assets/images/map/satellite.png');
const icon_standard = require('@common/assets/images/map/standard.png');

import { styles } from './styles';

class ProductPostMapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapType: 'standard',
      poi: null,
    }
  }

  componentWillMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }
      this.onRegionChange(region, region.latitude, region.longitude)
    })
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      lastLat: lastLat,
      lastLong: lastLong,
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  onPoiClick(e) {
    alert("p")
    const poi = e.nativeEvent;
    this.setState({ poi });
  }

  changeMapType(mapType) {
    if (mapType == 'satellite')
      this.setState({mapType: 'standard'});
    else
      this.setState({mapType: 'satellite'});
  }

  onMapPress(e) {
    console.log('PPPPPP', e)
  }

  render() {
    const { mapType, mapRegion, poi } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.btnMapTypeView}>
          <TouchableOpacity onPress={() => this.changeMapType(mapType)}>
            <Image source={mapType=='standard' ? icon_satellite : icon_standard} style={styles.btnMapType} />
          </TouchableOpacity>
        </View>
        
        <MapView
          style={ styles.mapView }
          provider={PROVIDER_GOOGLE}
          showsScale={true}
          showsPointsOfInterest={true}
          showsBuildings={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          mapType={mapType}
          region={ mapRegion }
          // onRegionChange={this.onRegionChange.bind(this)}
          onPress={this.onMapPress.bind(this)}
          onPoiClick={e => this.onPoiClick(e)}
        >
          {poi && (
            <MapView.Marker
              coordinate={this.state.poi.coordinate}
            >
              <MapView.Callout>
                <View>
                  <Text>Place Id: {poi.placeId}</Text>
                  <Text>Name: {poi.name}</Text>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          )}            
        </MapView>
      </View>
    );
  }
}

export default ProductPostMapPage;
