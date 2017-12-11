import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import Container from '../../layout/Container';
import TabView from '../../layout/TabView';

import { styles } from './styles';

const icon_list = require('../../../common/assets/images/map/list.png');
const icon_video = require('../../../common/assets/images/map/add_video.png');
const icon_mail = require('../../../common/assets/images/map/mailbox.png');
const icon_close = require('../../../common/assets/images/map/twisted_plus.png');
const icon_plus = require('../../../common/assets/images/map/plus.png');

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isBtnList: false,
      tabIndex: 0,
      btnItem: null,
      btnStatus: 'map',
    }
  }

  onSelectItem(index) {
    const {btnStatus} = this.state;

    switch(index) {
      case 'plus':
        this.setState({isBtnList: !this.state.isBtnList});
        break;
      case 'list':
        if (btnStatus == 'map')
          this.setState({btnStatus: 'list'});
        else
          this.setState({btnStatus: 'map'});
        break;
      case 'mail':
        break;
      case 'video':
        break;
      default:
        break;
    }
    this.setState({isBtnList: !this.state.isBtnList});
  }

  changeTab(index) {
    this.setState({btnStatus: 'map'})
  }

  render() {
    const {tabIndex, isBtnList, btnItem, btnStatus} = this.state;
    const title = btnStatus == 'list' ? 'LIST' : 'MAP';

    return (
      <Container title={title}>
        <TabView btnStatus={btnStatus} changeTab={(index)=>this.changeTab(index)}/>
        {isBtnList && (
        <View style={[styles.btn, styles.btnView]}>
          <View>
            <TouchableOpacity onPress={()=>this.onSelectItem('list')} activeOpacity={0.8}>
              <Image source={icon_list} style={styles.btnIcon} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={()=>this.onSelectItem('mail')} activeOpacity={0.8}>
              <Image source={icon_mail} style={styles.btnIcon} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={()=>this.onSelectItem('video')} activeOpacity={0.8}>
              <Image source={icon_video} style={styles.btnIcon} />
            </TouchableOpacity>
          </View>
        </View>
        )}
        <View style={[styles.btn, styles.btnPlus]}>
          <TouchableOpacity onPress={()=>this.onSelectItem('plus')} activeOpacity={0.8}>
            <Image source={isBtnList ? icon_close : icon_plus} style={styles.btnIcon} />
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}