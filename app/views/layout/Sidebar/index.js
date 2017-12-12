'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ListView
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { styles } from './styles';

const icon_login = require('../../../common/assets/images/menu/login_signup.png');
const icon_offer = require('../../../common/assets/images/menu/special_offer.png');
const icon_package = require('../../../common/assets/images/menu/package.png');
const icon_support = require('../../../common/assets/images/menu/advertising_support.png');

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
    }
  }

  onItemSelect(data, rowID) {
    this.props.menuState();
    if (this.state.loggedIn) {
      switch(rowID) {
        case '0':
          Actions.MyAds();
          break;
        case '1':
          Actions.MyWishList();
          break;
        case '4':
          Actions.MyLocation();
          break;
        case '5':
          Actions.Area();
          break;
        case '6':
          Actions.Package();
          break;
        case '7':
          Actions.ProfileEdit();
          break;
        case '8':
          Actions.SupportAdvertisement();
          break;
        default: 
          break;
      }
    }
    else {
      switch(rowID) {
        case '0':
          Actions.Register();
          break;
        case '2':
          Actions.Package();
          break;
        case '3':
          Actions.SupportAdvertisement();
          break;
        default: 
          break;
      }
    }
  }

 _renderRow (rowData, sectionID, rowID, highlightRow) {
   const { menuSelectedID } = this.props;
    return (
      <TouchableOpacity onPress={()=>{highlightRow(sectionID, rowID); this.onItemSelect(rowData, rowID)}}>
        <View style={styles.menuItem}>
          <Text style={styles.menuItemTitle}>{rowData.title}</Text>
          <Image source={rowData.icon} style={styles.menuItemIcon} />
        </View>
      </TouchableOpacity>
    )
  }
  _renderSeparator (sectionID, rowID, adjacentRowHighlighted) {
      return (
        <View
          key={`${sectionID}-${rowID}`}
          style={{ height: 1, backgroundColor: '#C3C3C3', flex:1}}
        />
      );
  }

  render() {
    let menuItems = [];
    if (this.state.loggedIn) {
      menuItems = [
        {
          title: 'My Ads (' + 3 + ')',
          icon: icon_login
        },
        {
          title: 'My Wish List (' + 4 + ')',
          icon: icon_offer
        },
        {
          title: 'Post New Ad',
          icon: icon_package
        },
        {
          title: 'My Messages',
          icon: icon_support
        },
        {
          title: 'My Location',
          icon: icon_support
        },
        {
          title: 'Area',
          icon: icon_support
        },
        {
          title: 'Packages',
          icon: icon_support
        },
        {
          title: 'Edit Profile',
          icon: icon_support
        },
        {
          title: 'Support & Advertisement',
          icon: icon_support
        },
        {
          title: 'Sign Out',
          icon: icon_support
        },
      ];
    }
    else {
      menuItems = [
        {
          title: 'Log in/Sign Up',
          icon: icon_login
        },
        {
          title: 'Special offers',
          icon: icon_offer
        },
        {
          title: 'Package',
          icon: icon_package
        },
        {
          title: 'Support & Advertisement',
          icon: icon_support
        },
      ];
    }

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(menuItems);
    return (
      <View style={styles.container}>
        <View
          style={{ height: 1, backgroundColor: '#C3C3C3'}}
        />
        <ListView
          dataSource={dataSource}
          renderRow={this._renderRow.bind(this)}
          renderSeparator={this._renderSeparator}
          enableEmptySections={true}
        />
      </View>
    );
  }
}

export default Sidebar;