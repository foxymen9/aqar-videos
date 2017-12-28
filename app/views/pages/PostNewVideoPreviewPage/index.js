import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  ListView,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';

import Video from 'react-native-video';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import Icon from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';

import Container from '../../layout/Container';
import { styles } from './styles';
import ModalShare from '../../components/ModalShare';

const icon_building = require('../../../common/assets/images/product_detail/building.png');
const icon_flat = require('../../../common/assets/images/product_detail/flat.png');
const icon_office = require('../../../common/assets/images/product_detail/office2.png');
const icon_room = require('../../../common/assets/images/product_detail/room.png');
const icon_shop = require('../../../common/assets/images/product_detail/shop.png');

export default class PostNewVideoPreviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showShareModal: false,
    }
  }

  onEdit() {
    Actions.PostNewVideo();
  }

  onPost() {
    
  }

  onCamera() {
    this.player.presentFullscreenPlayer();
    this.player.seek(0);
  }

  render() {
    const {title, description, price, productOption, region, city, district, category, videoUri} = this.props.data;  
    console.log('category', category);
    let icon = icon_building;
    if (category == 'building') {
      icon =  icon_building;
    }
    else if (category == 'flat') {
      icon =  icon_flat;
    }
    else if (category == 'office') {
      icon =  icon_office;
    }
    else if (category == 'room') {
      icon =  icon_room;
    }
    else if (category == 'shop') {
      icon =  icon_shop;
    }

    return (
      <Container title='PREVIEW'>
        <View style={styles.container}>
          <ScrollView>
            <TouchableOpacity onPress={()=>this.onCamera()}>
              <View style={styles.videoView}>
                {videoUri != null && (
                <Video
                  ref={(ref)=> {this.player = ref}}
                  source={{uri: videoUri}}
                  style={styles.videoThumbnail}
                  resizeMode='cover'
                  autoplay={false}
                  onLoadStart={()=>this.player.presentFullscreenPlayer}
                />)}
              </View>
            </TouchableOpacity>
            <View style={styles.titleView}>
              <Text style={styles.textTitle}>
                {title}
              </Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.textDescription}>{description}</Text>
            </View>
            <View style={styles.separate} />
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                {price}
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textDescription}>
                {region}
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textDescription}>
                {city}
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textDescription}>
                {district}
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                {productOption}
              </Text>
            </View>
            <View style={styles.titleView}>
              <View style={styles.iconView}>
                <Image source={icon} style={styles.iconOffice} resizeMode="cover" />
                <Text style={styles.textDescription}>
                  {category}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={()=>this.onEdit()} activeOpacity={0.5}>
              <View style={styles.editBtnView}>
                <Text style={styles.textEdit}>EDIT</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.onPost()} activeOpacity={0.5}>
              <View style={styles.postBtnView}>
                <Text style={styles.textEdit}>POST</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Container>
    );
  }
}