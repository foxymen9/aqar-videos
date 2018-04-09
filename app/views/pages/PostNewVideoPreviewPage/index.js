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

import { RNS3 } from 'react-native-aws3';
import { AWS_OPTIONS } from '@common';
import { pickBy } from 'lodash';

import I18n from '@i18n';
import Container from '@layout/Container';
import { styles } from './styles';
import * as commonColors from '@common/styles/commonColors';
import * as commonStyles from '@common/styles/commonStyles';
import ModalShare from '@components/ModalShare';

import LoadingSpinner from '@components/LoadingSpinner';
import CustomAlert from '@components/CustomAlert';

const icon_building = require('@common/assets/images/product_detail/building.png');
const icon_villa = require('@common/assets/images/product_detail/villa.png');
const icon_apartment = require('@common/assets/images/product_detail/apartment.png');
const icon_office = require('@common/assets/images/product_detail/office.png');
const icon_chalet = require('@common/assets/images/product_detail/chalet.png');
const icon_apartment_owner = require('@common/assets/images/product_detail/apartment_owner.png');
const icon_factory = require('@common/assets/images/product_detail/factory.png');
const icon_firms = require('@common/assets/images/product_detail/firms.png');
const icon_office_for_sale = require('@common/assets/images/product_detail/office_for_sale.png');
const icon_store = require('@common/assets/images/product_detail/stores.png');
const icon_gallery = require('@common/assets/images/product_detail/gallery.png');
const icon_land = require('@common/assets/images/product_detail/land.png');
const icon_esteraha = require('@common/assets/images/product_detail/esteraha.png');

const iconList = {
  'building': icon_building,
  'villa': icon_villa,
  'apartment': icon_apartment,
  'office': icon_office,
  'chalet': icon_chalet,
  'apartent_owner': icon_apartment_owner,
  'factory': icon_factory,
  'firms': icon_firms,
  'office_for_sale': icon_office_for_sale,
  'store': icon_store,
  'gallery': icon_gallery,
  'land': icon_land,
  'esteraha': icon_esteraha,
}

export default class PostNewVideoPreviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showShareModal: false,
      terms: false,
      loading: false,
      videoError: false,
      icon: icon_building,
    }
  }

  componentWillMount() {
    const { data } = this.props;

    const icon = pickBy(iconList, data.category)
    this.setState({ icon })
  }


  onEdit() {
    Actions.PostNewVideo();
  }

  onPost() {
    const { videoUri, videoFileName } = this.props.data
    const file = {
      uri: videoUri,
      name: videoFileName,
      type: 'video/quicktime',
    }

    this.setState({ loading: true })
    RNS3.put(file, AWS_OPTIONS).then(response => {
      this.setState({ loading: false })
      if (response.status !== 201) {
        this.setState({ videoError: true, videoUploadingErrorMsg: 'Failed to upload video file to server' })
        throw new Error("Failed to upload video file to server")
      } else {
        this.setState({ videoError: false })
        responseUrl = response.body.postResponse.location

        console.log(responseUrl)
      }
    })
  }

  onDelete() {

  }

  onCamera() {
    this.player.presentFullscreenPlayer();
    this.player.seek(0);
  }

  render() {
    const { data } = this.props;
    const { icon } = this.state;

    return (
      <Container title={I18n.t('sidebar.preview')}>
        <LoadingSpinner visible={this.state.loading } />
        
        <CustomAlert 
          title={'Warning'}
          message={this.state.videoUploadingErrorMsg} 
          visible={this.state.videoError} 
          closeAlert={() => this.setState({errorLoading: false})}
        />

        <View style={styles.container}>
          <ScrollView>
            <TouchableOpacity onPress={() => this.onCamera()}>
              <View style={styles.videoView}>
                {data.videoUri !== null && (
                <Video
                  ref={(ref) => {this.player = ref}}
                  source={{uri: data.videoUri}}
                  style={styles.videoThumbnail}
                  resizeMode='cover'
                  autoplay={false}
                  onLoadStart={() => this.player.presentFullscreenPlayer}
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
                {data.address}
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

            {(data.category == 'apartment') && (
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
                <Image source={icon} style={styles.iconOffice} resizeMode="contain" />
                <Text style={styles.textDescription}>
                  {data.category}
                </Text>
              </View>
            </View>

            <View style={styles.itemView}>
              <CheckBox
                label={I18n.t('terms_conditions')}
                labelBefore
                labelStyle={{color: commonColors.placeholderText, fontSize: 14, fontFamily: commonStyles.normalFont, fontWeight: 'bold'}}
                onChange={(checked) => this.setState({terms: checked})}
              />
            </View>

            <TouchableOpacity onPress={() => this.onEdit()} activeOpacity={0.5}>
              <View style={[styles.buttonStyle, styles.editBtnView]}>
                <Text style={styles.textEdit}>{I18n.t('edit')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPost()} activeOpacity={0.5}>
              <View style={[styles.buttonStyle, styles.postBtnView]}>
                <Text style={styles.textEdit}>{I18n.t('post')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onDelete()} activeOpacity={0.5}>
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