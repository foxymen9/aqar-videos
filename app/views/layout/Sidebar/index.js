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
import { userSignOut } from '../../../redux/User/actions';

const icon_login = require('../../../common/assets/images/menu/login_signup.png');
const icon_offer = require('../../../common/assets/images/menu/special_offer.png');
const icon_package = require('../../../common/assets/images/menu/package.png');
const icon_support = require('../../../common/assets/images/menu/advertising_support.png');
const icon_area = require('../../../common/assets/images/menu/area.png');
const icon_message = require('../../../common/assets/images/menu/messages.png');
const icon_location = require('../../../common/assets/images/menu/my_location.png');
const icon_myad = require('../../../common/assets/images/menu/my_ads.png');
const icon_newad = require('../../../common/assets/images/menu/post_new_ad.png');
const icon_signout = require('../../../common/assets/images/menu/sign_out.png');
const icon_pen = require('../../../common/assets/images/menu/pen.png');
const icon_wishlist = require('../../../common/assets/images/menu/my_wishlist.png');

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: true,
    }
  }

  componentWillReceiveProps(nextProps) {
    const {userLogin} = this.props;
    this.setState({userLogin: userLogin});
  }

  onItemSelect(data, rowID) {
    this.props.menuState();
    if (this.state.userLogin) {
      switch(rowID) {
        case '0':
          Actions.Main();
          break;
        case '1':
          Actions.MyAds();
          break;
        case '2':
          Actions.MyWishList();
          break;
        case '3':
          // Actions.VideoRecord();
          Actions.PostNewVideo();
          break;
        case '4':
          Actions.MyMessage();
          break;
        case '5':
          Actions.MyLocation();
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
        case '9':
          this.props.userSignOut();
        default: 
          break;
      }
    }
    else {
      switch(rowID) {
        case '0':
          Actions.Main();
          break;
        case '1':
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
          <View style={styles.iconView}>
            <Image source={rowData.icon} style={styles.menuItemIcon} />
          </View>
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
    if (this.state.userLogin) {
      menuItems = [
        {
          title: 'Home',
          icon: icon_area
        },
        {
          title: 'My Ads (' + 3 + ')',
          icon: icon_myad
        },
        {
          title: 'My Wish List (' + 4 + ')',
          icon: icon_wishlist
        },
        {
          title: 'Post New Ad',
          icon: icon_newad
        },
        {
          title: 'My Messages',
          icon: icon_message
        },
        {
          title: 'My Location',
          icon: icon_location
        },
        {
          title: 'Packages',
          icon: icon_package
        },
        {
          title: 'Edit Profile',
          icon: icon_pen
        },
        {
          title: 'Support & Advertisement',
          icon: icon_support
        },
        {
          title: 'Sign Out',
          icon: icon_signout
        },
      ];
    }
    else {
      menuItems = [
        {
          title: 'Area',
          icon: icon_area
        },
        {
          title: 'Log in/Sign Up',
          icon: icon_login
        },
        // {
        //   title: 'Special offers',
        //   icon: icon_offer
        // },
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

export default connect(state => ({
  userLogin: state.user.userLogin,
}),{ userSignOut })(Sidebar);