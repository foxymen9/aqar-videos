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
import Geocoder from 'react-native-geocoder';

const icon_bubble = require('@common/assets/images/map/speech_bubble.png');
const icon_satellite = require('@common/assets/images/map/satellite.png');
const icon_standard = require('@common/assets/images/map/standard.png');

import { styles } from './styles';

class PostProductLocationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapType: 'standard',
      poi: null,
      coordinate: null,
      isSelect: false,
    }
  }

  componentWillMount() {
    const { coordinate } = this.props
    if (coordinate) {
      this.setState({ coordinate, isSelect: true })
      let region = {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }
      this.onRegionChange(region, region.latitude, region.longitude)
    } else {
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

  changeMapType(mapType) {
    if (mapType == 'satellite')
      this.setState({mapType: 'standard'});
    else
      this.setState({mapType: 'satellite'});
  }

  async onMapPress(e) {
    this.setState({ isSelect: true })
    this.setState({ coordinate: {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    }})
    const coordinate = {
      lat: e.nativeEvent.coordinate.latitude,
      lng: e.nativeEvent.coordinate.longitude,
    }

    const res = await Geocoder.geocodePosition(coordinate)
    if (res) {
      const mapAddress = {
        country: res[0].country ? res[0].country : '',
        city: res[0].locality ? res[0].locality : '',
        street: res[0].streetName ? res[0].streetName : '',
        streeNumber: res[0].streetNumber ? res[0].streetNumber : '',
        postalCode: res[0].postalCode ? res[0].postalCode : '',
        coordinate: {
          latitude: coordinate.lat,
          longitude: coordinate.lng,
        }
      }
      this.props.changePage()
      this.props.getAddress(mapAddress)
    }
  }

  render() {
    const {
      mapType,
      mapRegion,
      isSelect,
      coordinate,
    } = this.state;

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
          onPress={e => this.onMapPress(e)}
          onPoiClick={e => this.onPoiClick(e)}
        >
          {isSelect && (
            <MapView.Marker
              coordinate={coordinate}
            />
          )}            
        </MapView>
      </View>
    );
  }
}

export default PostProductLocationPage;
