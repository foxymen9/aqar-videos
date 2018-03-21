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

import { styles } from './styles';

const icon_list = require('@common/assets/images/map/list.png');
const icon_map = require('@common/assets/images/map/map.png');
const icon_video = require('@common/assets/images/map/add_video.png');
const icon_mail = require('@common/assets/images/map/mailbox.png');

export default class MapButtonListComponent extends Component {
  onNewVideo() {
    // Actions.VideoRecord();
    Actions.PostNewVideo();
  }

  onDirectMessage() {
    Actions.MyMessage();
  }

  render() {
    const {btnStatus} = this.props;

    return (
      <View style={[styles.btn, this.props.btnStatus=='map' ? styles.btnView : styles.btnViewList]}>
        <View>
          <TouchableOpacity onPress={()=>this.props.onSelectItem('list')} activeOpacity={0.8}>
            <Image source={btnStatus=='list' ? icon_map: icon_list} style={styles.btnIcon} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={()=>this.onDirectMessage()}  activeOpacity={0.8}>
            <Image source={icon_mail} style={styles.btnIcon} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={()=>this.onNewVideo()} activeOpacity={0.8}>
            <Image source={icon_video} style={styles.btnIcon} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}