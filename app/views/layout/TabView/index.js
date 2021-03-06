'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ListView,
  ScrollView
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import ScrollableTabBar from './ScrollableTabBar';


import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { styles } from './styles';
import * as commonStyles from '../../../common/styles/commonStyles';

import { saveMyLocation } from '../../../redux/Map/actions';

import MapPage from '../../pages/MapPage';
import ProductListPage from '../../pages/ProductListPage';

const ASPECT_RATIO = commonStyles.screenWidth / commonStyles.screenHeight
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class TabView extends Component {
  constructor(props) {
    super(props);
    watchID:  null;

    this.state = {
      tabIndex: 0,
      region: null,
      currentLocation: null,
    }
  }

  componentDidMount() {
    const {myLocation} = this.props;

    if (myLocation == null) {
      this.watchID = navigator.geolocation.watchPosition((position) => {
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
        let currentLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }

        this.setState({
          region: region,
          currentLocation: currentLocation
        });

        this.props.saveMyLocation({
          region: region,
          currentLocation: currentLocation
        });
      })
    }
    else {
      this.setState({
        region: myLocation.region,
        currentLocation: myLocation.currentLocation
      })
    }
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  changeTab(index) {
    index = index.i;
    this.setState({tabIndex: index});
    this.props.changeTab(index);
  }

  render() {
    const {btnStatus} = this.props;
    const { tabIndex, region, currentLocation } = this.state;
    
    if (currentLocation == null || region == null) {
      return null;
    }
    
    let buildingData = [
      {
        coordinates: {
          latitude: currentLocation.latitude - 0.02,
          longitude: currentLocation.longitude
        },
        data: {
          price: '100K',
          image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
          title: 'Test Title1'
        }
      },
      {
        coordinates: {
          latitude: currentLocation.latitude + 0.01,
          longitude: currentLocation.longitude - 0.01
        },
        data: {
          price: '90K',
          image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
          title: 'Test Title2'
        }
      },
      {
        coordinates: {
          latitude: currentLocation.latitude - 0.01,
          longitude: currentLocation.longitude + 0.01
        },
        data: {
          price: '80K',
          image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
          title: 'Test Title3'
        }
      }
    ];

    let apartmentData = [
      {
        coordinates: {
          latitude: currentLocation.latitude - 0.02,
          longitude: currentLocation.longitude - 0.01
        },
        data: {
          price: '100K',
          image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
          title: 'Test Title1'
        }
      },
      {
        coordinates: {
          latitude: currentLocation.latitude + 0.01,
          longitude: currentLocation.longitude + 0.01
        },
        data: {
          price: '90K',
          image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
          title: 'Test Title2'
        }
      },
      {
        coordinates: {
          latitude: currentLocation.latitude + 0.02,
          longitude: currentLocation.longitude - 0.01
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
        <ScrollableTabView
          style={{backgroundColor:'#FFF'}}
          tabBarBackgroundColor='#424242'
          tabBarTextStyle={{color:'#FFF'}}
          contentProps={{bounces: true, keyboardDismissMode: 'on-drag'}}
          tabBarUnderlineStyle={{backgroundColor:'#DC754C'}}
          onChangeTab = {(index)=>this.changeTab(index)}
          renderTabBar={() => <ScrollableTabBar/>}
        >
          <ScrollView tabLabel="Building">
            {btnStatus == 'map' && (
              <MapPage page="building" locationData={buildingData} region={region} />
            )}
            {btnStatus == 'list' && (
              <ProductListPage />
            )}
          </ScrollView>
          <ScrollView tabLabel="Apartment">
            {btnStatus == 'map' && (
              <MapPage page="apartment" locationData={apartmentData} region={region} />
            )}
            {btnStatus == 'list' && (
              <ProductListPage />
            )}
          </ScrollView>
          <ScrollView tabLabel="Room">
            {btnStatus == 'map' && (
              <MapPage page="room" locationData={buildingData} region={region} />
            )}
            {btnStatus == 'list' && (
              <ProductListPage />
            )}
          </ScrollView>
          <ScrollView tabLabel="Home">
            {btnStatus == 'map' && (
              <MapPage page="home" locationData={buildingData} region={region} />
            )}
            {btnStatus == 'list' && (
              <ProductListPage />
            )}
          </ScrollView>
          <ScrollView tabLabel="Gallery">
            {btnStatus == 'map' && (
              <MapPage page="gallery" locationData={buildingData} region={region} />
            )}
            {btnStatus == 'list' && (
              <ProductListPage />
            )}
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  }
}

export default connect(state => ({
  myLocation: state.map.myLocation
}),{ saveMyLocation })(TabView);
