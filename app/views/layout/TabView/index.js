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

import MapPage from '../../pages/MapPage';
import ProductListPage from '../../pages/ProductListPage';

class TabView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    }
  }

  changeTab(index) {
    index = index.i;
    this.setState({tabIndex: index});
    this.props.changeTab(index);
  }

  render() {
    const {btnStatus} = this.props;
    const {tabIndex} = this.state;
    
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
              <MapPage page="building" />
            )}
            {btnStatus == 'list' && (
              <ProductListPage />
            )}
          </ScrollView>
          <ScrollView tabLabel="Apartment">
            {btnStatus == 'map' && (
              <MapPage page="apartment" />
            )}
            {btnStatus == 'list' && (
              <ProductListPage />
            )}
          </ScrollView>
          <ScrollView tabLabel="Room"></ScrollView>
          <ScrollView tabLabel="Home"></ScrollView>
          <ScrollView tabLabel="Gallery"></ScrollView>
        </ScrollableTabView>
      </View>
    );
  }
}

export default TabView;