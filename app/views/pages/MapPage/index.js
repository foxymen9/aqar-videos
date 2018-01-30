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
import * as commonStyles from '@common/styles/commonStyles';

const icon_bubble = require('@common/assets/images/map/speech_bubble.png');
const icon_satellite = require('@common/assets/images/map/satellite.png');
const icon_standard = require('@common/assets/images/map/standard.png');

export default class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapType: 'standard',
    }
  }

  gotoDetailPage(data) {
    Actions.ProductDetail({data: data.data});
  }

  changeMapType(mapType) {
    if (mapType == 'satellite')
      this.setState({mapType: 'standard'});
    else
      this.setState({mapType: 'satellite'});
  }

  render() {
    const { mapType } = this.state;
    const { locationData, region, page } = this.props;

    return (
      <View style={[styles.container, page=='mylocation' ? {height: commonStyles.screenNormalHeight} : {height: commonStyles.screenSubHeight}]}>
        <View style={styles.btnMapTypeView}>
          <TouchableOpacity onPress={()=>this.changeMapType(mapType)}>
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
          showsCompass={true}
          loadingEnabled={true}
          toolbarEnabled={true}
          pitchEnabled={true}
          zoomEnabled={true}
          rotateEnabled={true}
          mapType={mapType}
          region={ region }
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