import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import { styles } from './styles';

const icon_list = require('../../../common/assets/images/map/list.png');
const icon_video = require('../../../common/assets/images/map/add_video.png');
const icon_mail = require('../../../common/assets/images/map/mailbox.png');

export default class MapButtonListComponent extends Component {
  render() {
    return (
      <View style={[styles.btn, styles.btnView]}>
        <View>
          <TouchableOpacity onPress={()=>this.props.onSelectItem('list')} activeOpacity={0.8}>
            <Image source={icon_list} style={styles.btnIcon} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={()=>this.props.onSelectItem('mail')} activeOpacity={0.8}>
            <Image source={icon_mail} style={styles.btnIcon} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={()=>this.props.onSelectItem('video')} activeOpacity={0.8}>
            <Image source={icon_video} style={styles.btnIcon} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}