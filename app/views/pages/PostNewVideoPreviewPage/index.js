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
import CheckBox from 'react-native-modest-checkbox';

import I18n from '@i18n';
import Container from '@layout/Container';
import { styles } from './styles';
import * as commonColors from '@common/styles/commonColors';
import ModalShare from '@components/ModalShare';

const icon_building = require('@common/assets/images/product_detail/building.png');
const icon_villa = require('@common/assets/images/product_detail/villa2.png');
const icon_apartment = require('@common/assets/images/product_detail/flat.png');
const icon_office = require('@common/assets/images/product_detail/office2.png');
const icon_gallery = require('@common/assets/images/product_detail/shop.png');
const icon_land = require('@common/assets/images/product_detail/area2.png');
const icon_chalet = require('@common/assets/images/product_detail/chalet2.png');
const icon_real_estate = require('@common/assets/images/product_detail/realestate2.png');

export default class PostNewVideoPreviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showShareModal: false,
      terms: false,
    }
  }

  onEdit() {
    Actions.PostNewVideo();
  }

  onPost() {
    
  }

  onDelete() {

  }

  onCamera() {
    this.player.presentFullscreenPlayer();
    this.player.seek(0);
  }

  render() {
    const { data } = this.props;
    
    let icon = icon_building;
    if (data.category == 'building') {
      icon =  icon_building;
    }
    else if (data.category == 'villa') {
      icon =  icon_villa;
    }
    else if (data.category == 'apartment') {
      icon =  icon_apartment;
    }
    else if (data.category == 'office') {
      icon =  icon_office;
    }
    else if (data.category == 'gallery') {
      icon =  icon_gallery;
    }
    else if (data.category == 'land') {
      icon =  icon_land;
    }
    else if (data.category == 'chalet') {
      icon =  icon_chalet;
    }
    else if (data.category == 'real_estate') {
      icon =  icon_real_estate;
    }

    return (
      <Container title={I18n.t('sidebar.preview')}>
        <View style={styles.container}>
          <ScrollView>
            <TouchableOpacity onPress={()=>this.onCamera()}>
              <View style={styles.videoView}>
                {data.videoUri != null && (
                <Video
                  ref={(ref)=> {this.player = ref}}
                  source={{uri: data.videoUri}}
                  style={styles.videoThumbnail}
                  resizeMode='cover'
                  autoplay={false}
                  onLoadStart={()=>this.player.presentFullscreenPlayer}
                />)}
              </View>
            </TouchableOpacity>
            <View style={styles.titleView}>
              <Text style={styles.textTitle}>
                {data.title}
              </Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.textDescription}>
                {data.description}
              </Text>
            </View>
            <View style={styles.separate} />
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                {data.price}
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textDescription}>
                {data.region}
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textDescription}>
                {data.city}
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textDescription}>
                {data.district}
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                {data.productOption}
              </Text>
            </View>
            {data.category == 'building' && (
              <View style={styles.itemView}>
                <Text style={styles.textTitle}>
                  {data.buildingType}
                </Text>
              </View>
            )}
            {(data.category == 'building' || data.category == 'villa') && (
              <View style={styles.itemView}>
                <Text style={styles.textTitle}>
                  {data.price}
                </Text>
              </View>
            )}
            {data.category == 'villa' && (
              <View style={styles.itemView}>
                <Text style={styles.textTitle}>
                  {data.minSquareMeter}
                </Text>
              </View>
            )}
            {(data.category == 'apartment' || data.category == 'period') && (
              <View style={styles.itemView}>
                <Text style={styles.textTitle}>
                  {data.period}
                </Text>
              </View>
            )}
            {(data.category == 'apartment') && (
              <View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    {data.location}
                  </Text>
                </View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    {data.furniture}
                  </Text>
                </View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    {data.roomType}
                  </Text>
                </View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    {data.roomCount}
                  </Text>
                </View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    {data.ownership}
                  </Text>
                </View>
              </View>
            )}
            {(data.category == 'office') && (
              <View style={styles.itemView}>
                <Text style={styles.textTitle}>
                  {data.areaSpace}
                </Text>
              </View>
            )}
            {(data.category == 'gallery') && (
              <View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    {data.streetSize}
                  </Text>
                </View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    {data.galleryNumber}
                  </Text>
                </View>
              </View>
            )}

            <View style={styles.titleView}>
              <View style={styles.iconView}>
                <Image source={icon} style={styles.iconOffice} resizeMode="cover" />
                <Text style={styles.textDescription}>
                  {data.category}
                </Text>
              </View>
            </View>
            <View style={styles.itemView}>
              <CheckBox
                label={I18n.t('terms_conditions')}
                labelBefore={true}
                labelStyle={{color: commonColors.placeholderText}}
                onChange={(checked) => this.setState({terms: checked})}
              />
            </View>

            <TouchableOpacity onPress={()=>this.onEdit()} activeOpacity={0.5}>
              <View style={[styles.buttonStyle, styles.editBtnView]}>
                <Text style={styles.textEdit}>{I18n.t('edit')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.onPost()} activeOpacity={0.5}>
              <View style={[styles.buttonStyle, styles.postBtnView]}>
                <Text style={styles.textEdit}>{I18n.t('post')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.onDelete()} activeOpacity={0.5}>
              <View style={[styles.buttonStyle, styles.deleteBtnView]}>
                <Text style={styles.textEdit}>{I18n.t('delete')}</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Container>
    );
  }
}