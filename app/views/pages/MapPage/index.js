import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import MapView from 'react-native-maps';

import { styles } from './styles';
import * as commonStyles from '../../../common/styles/commonStyles';

const icon_bubble = require('../../../common/assets/images/map/speech_bubble.png');

const ASPECT_RATIO = commonStyles.screenWidth / commonStyles.screenHeight
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LATITUDE = 37.798790;
const LONGITUDE = -122.442753;

export default class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      currentLocation: {
        latitude: LATITUDE,
        longitude: LONGITUDE
      },
      coordinates: LONGITUDE,
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    const { coordinates, region, currentLocation, isBtnList } = this.state;
    // if (coordinates == null || currentLocation == null || region == null)
    //   return null;

    return (
      <View style={styles.container}>
        <MapView
          style={ styles.mapView }
          initialRegion={ region }
        >
          <MapView.Marker
            coordinate={currentLocation}
            title="Curernt location"
          >
            <View style={styles.marker}>
              <Image source={icon_bubble} resizeMode="cover">
              </Image>
              <Text style={styles.markerText}>100k</Text>
            </View>
          </MapView.Marker>
          {/* {coordinates.map((marker, index) => (
            <MapView.Marker
              key={index}
              coordinate={marker}
              title="Maker"
            >
              <Text>{index}</Text>
            </MapView.Marker>
          ))} */}
        </MapView>
      </View>
    );
  }
}