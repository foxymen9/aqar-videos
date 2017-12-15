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
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

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
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  gotoDetailPage(data) {
    Actions.ProductDetail();
  }

  render() {
    const { region, currentLocation, isBtnList } = this.state;
    // if (coordinates == null || currentLocation == null || region == null)
    //   return null;

    let locationData = [
      {
        coordinates: {
          latitude: 37.788780,
          longitude: -122.442753
        },
        data: {
          price: '100K',
          image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
          title: 'Test Title1'
        }
      },
      {
        coordinates: {
          latitude: 37.798781,
          longitude: -122.422753
        },
        data: {
          price: '90K',
          image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
          title: 'Test Title2'
        }
      },
      {
        coordinates: {
          latitude: 37.778780,
          longitude: -122.452724
        },
        data: {
          price: '80K',
          image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
          title: 'Test Title3'
        }
      }
    ];

    return (
      <View style={styles.container}>
        <MapView
          style={ styles.mapView }
          initialRegion={ region }
        >
          {locationData.map((marker, index) => (
            <MapView.Marker
              key={index}
              coordinate={marker.coordinates}
              zIndex={9}
            >
              <View style={styles.marker}>
                <Image source={icon_bubble} resizeMode="cover">
                </Image>
                <Text style={styles.markerText}>{marker.data.price}</Text>
              </View>
              <MapView.Callout>
                <TouchableOpacity onPress={()=>this.gotoDetailPage(marker)}>
                  <View style={styles.markerDetailView}>
                    <Image source={{uri: marker.data.image}} style={styles.markerDetailImage} resizeMode="cover">
                    </Image>
                    <Text style={styles.markerDetailText}>{marker.data.title}</Text>
                  </View>
                </TouchableOpacity>
              </MapView.Callout>
            </MapView.Marker>
          ))}
        </MapView>
      </View>
    );
  }
}