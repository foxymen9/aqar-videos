import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { styles } from './styles';
import * as commonStyles from '../../../common/styles/commonStyles';

const icon_bubble = require('../../../common/assets/images/map/speech_bubble.png');

export default class MapPage extends Component {
  constructor(props) {
    super(props);
  }

  gotoDetailPage(data) {
    Actions.ProductDetail({data: data.data});
  }

  render() {
    const { locationData, region } = this.props;

    return (
      <View style={styles.container}>
        <MapView
          style={ styles.mapView }
          provider="google"
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          loadingEnabled={true}
          toolbarEnabled={true}
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