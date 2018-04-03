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
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';
import CheckBox from 'react-native-modest-checkbox';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';

import I18n from '@i18n';
import Container from '@layout/Container';
import ModalShare from '@components/ModalShare';
import {RadioGroup, RadioButton} from '@components/RadioButtonGroup';
import DropdownComponent from '@components/DropdownComponent';
import CategoryComponent from '@components/CategoryComponent';
import AutoSuggestComponent from '@components/AutoSuggestComponent';
import LoadingSpinner from '@components/LoadingSpinner';
import PostProductLocationPage from '../PostProductLocationPage'

import { styles } from './styles';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';
import { getRegions } from '@redux/Region/actions';

class PostNewVideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      category: 'building',
      title: '',
      description: '',
      price: '',
      productOption: 'Sale',
      period: '',
      buildingType: '',
      videoUri: null,
      minSquareMeter: '1000',
      address: I18n.t('post_video.select_address'),
      page: 'post',
      coordinate: null,
    }
    this.player = null;
  }

  componentWillMount() {
    // if (this.props.tokenInfo) {
    //   this.setState({ loading: true })
    //   this.props.getRegions(this.props.tokenInfo.token)
    // }
  }

  componentWillReceiveProps(nextProps) {

  }
  onPreview() {
    const propsData = this.state;
    
    // Actions.PostNewVideoPreview({data: propsData});
    // if (propsData.videoUri != null) {
    //   Actions.PostNewVideoPreview({data: propsData});
    // }
  }

  onSelectProductOption(index, value) {
    this.setState({productOption: value})
  }

  selectCategory(item) {
    this.setState({category: item});
    // this.refs.scrollContainer.scrollToEnd();
  }

  onDeleteVideo() {
    this.setState({ videoUri: null })
  }

  onCamera() {
    if (this.state.videoUri == null) {
      const options = {
        title: I18n.t('post_video.record_choose_video'),
        takePhotoButtonTitle: I18n.t('post_video.record_video'),
        chooseFromLibraryButtonTitle: I18n.t('post_video.choose_library'),
        mediaType: 'video',
        allowsEditing: true,
        durationLimit: 300, //limit 5mins
        // noData: true,
        storageOptions: {
          skipBackup: true,
          path: 'videos',
          cameraRoll: true,
          waitUntilSaved: true,
        }
      }
      ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
        }
        else if (response.error) {
        }
        else if (response.customButton) {
        }
        else {
          console.log('IMAGE DATA: ', response);
          this.setState({videoUri: response.uri});
        }
      })
    }
    else {
      this.player.presentFullscreenPlayer();
      this.player.seek(0);
    }
  }

  changePage(page) {
    this.setState({ page })
  }

  getAddress(addressArr) {
    const address = addressArr.street + ', ' + addressArr.city + ', ' + addressArr.country;
    this.setState({ address })
    this.setState({ coordinate: addressArr.coordinate })
  }

  render() {
    // const {videoData} = this.props;
    const {
      page,
      coordinate,
      address,
      category, 
      videoUri
    } = this.state;  

    const periodData = [
      { value: 'Daily' },
      { value: 'Monthly' },
      { value: 'Yearly' }
    ];

    const buildingTypeData = [
      { value: 'Residential' },
      { value: 'Commercial' }
    ];

    const apartmentRoomType = [
      { value: 'Singular' },
      { value: 'Familiar' }
    ];

    if (page === 'map') {
      return (
        <PostProductLocationPage
          changePage={() => this.changePage('post')}
          coordinate={coordinate}
          getAddress={address => this.getAddress(address)}
          address={address}
        />
      )
    }

    return (
      <Container title={I18n.t('sidebar.post_new_ads')}>
        <LoadingSpinner visible={this.state.loading } />

        <View style={styles.container}>
          <KeyboardAwareScrollView ref="scrollContainer">
            <TouchableOpacity onPress={()=>this.onCamera()}>
              <View style={styles.videoView}>
                {videoUri ?
                  <Video
                    ref={(ref)=> {this.player = ref}}
                    source={{uri: videoUri}}
                    style={styles.videoThumbnail}
                    resizeMode='cover'
                    autoplay={false}
                    onLoadStart={()=>this.player.presentFullscreenPlayer}
                  /> :
                  <Icon name='video' style={styles.cameraIcon} />
                }
                {videoUri && (
                  <View style={styles.deleteVideo}>
                    <TouchableOpacity onPress={() => this.onDeleteVideo()}>
                      <Icon name='video-off' style={styles.deleteVideoIcon} />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </TouchableOpacity>

            <CategoryComponent category={(item)=>this.selectCategory(item)} />

            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                {I18n.t('post_video.location')}
              </Text>
              <TouchableOpacity onPress={()=>this.changePage('map')}>
                <View style={styles.addressView}>
                  <Text style={styles.input}>{this.state.address}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                {I18n.t('post_video.title')}
              </Text>
              <TextInput
                ref="title"
                autoCapitalize="none"
                autoCorrect={ true }
                placeholder={I18n.t('post_video.ph_video_name')}
                placeholderTextColor={ commonColors.placeholderSubText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                value={ this.state.title }
                onChangeText={ (text) => this.setState({ title: text }) }
                onSubmitEditing={ () => this.refs.description.focus() }
              />
            </View>

            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                {I18n.t('post_video.description')}
              </Text>
              <TextInput
                ref="description"
                autoCapitalize="none"
                autoCorrect={ true }
                multiline={true}
                placeholder={I18n.t('post_video.ph_video_desc')}
                placeholderTextColor={ commonColors.placeholderSubText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                value={ this.state.description }
                onChangeText={ (text) => this.setState({ description: text }) }
                onSubmitEditing={ () => this.refs.price.focus() }
              />
            </View>

            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                  {I18n.t('post_video.price')}
              </Text>
              <TextInput
                ref="price"
                autoCapitalize="none"
                autoCorrect={ false }
                placeholder={I18n.t('sar')}
                placeholderTextColor={ commonColors.placeholderSubText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                keyboardType="number-pad"
                value={ this.state.price }
                onChangeText={ (text) => this.setState({ price: text }) }
                onSubmitEditing={ () => this.refs.password.focus() }
              />
            </View>

            <View style={styles.productOptionView}>
              <RadioGroup 
                color='#7D7D7D' 
                style={styles.radioGroup} 
                thickness={2}
                selectedIndex={0}
                onSelect={(index, value)=> this.onSelectProductOption(index, value)}
              >
                <RadioButton value={'Sale'}>
                  <Text style={styles.textDescription}>{I18n.t('post_video.sale')}</Text>
                </RadioButton>
                <RadioButton value={'Rent'}>
                  <Text style={styles.textDescription}>{I18n.t('post_video.rent')}</Text>
                </RadioButton>
              </RadioGroup>
              <Text style={styles.textTitle}>
                {I18n.t('post_video.product_option')}
              </Text>
            </View>

            {(category == 'building' || category == 'land') && (
              <View style={styles.itemView}>
                <Text style={styles.textTitle}>
                  {I18n.t('post_video.type')}
                </Text>
                <DropdownComponent selectItem={(value)=>this.setState({buildingType: value})} item={this.state.buildingType} data={buildingTypeData} />
              </View>
            )}

            {category == 'villa' && (
            <View style={styles.priceView}>
              <View style={styles.squareMeterBox}>
                <TextInput
                  ref="squareMeter"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  multiline={true}
                  placeholder={I18n.t('post_video.min_squaremeter')}
                  placeholderTextColor={ commonColors.placeholderSubText }
                  textAlign="right"
                  style={styles.inputPrice}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="numbers-and-punctuation"
                  value={ this.state.squareMeter }
                  onChangeText={ (text) => this.setState({ squareMeter: text }) }
                />
              </View>
            </View>)}

            {(category == 'apartment' || category == 'chalet') && (
              <View style={styles.itemView}>
                <Text style={styles.textTitle}>
                  {I18n.t('post_video.period')}
                </Text>
                <DropdownComponent selectItem={(value)=>this.setState({period: value})} item={this.state.period} data={periodData} />
              </View>
            )}

            {(category == 'apartment') && (
              <View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    {I18n.t('post_video.location')}
                  </Text>
                  <TextInput
                    ref="location"
                    autoCapitalize="none"
                    autoCorrect={ true }
                    placeholder={I18n.t('post_video.ph_apartment')}
                    placeholderTextColor={ commonColors.placeholderSubText }
                    textAlign="right"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    value={ this.state.location }
                    onChangeText={ (text) => this.setState({ location: text }) }
                  />
                </View>
                <View style={styles.itemView}>
                  <CheckBox
                    label={I18n.t('post_video.furniture')}
                    labelBefore={true}
                    labelStyle={{color: commonColors.placeholderText, fontSize: 14, fontFamily: commonStyles.normalFont, fontWeight: 'bold'}}
                    onChange={(checked) => this.setState({furniture: checked})}
                  />
                </View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    {I18n.t('post_video.room_type')}
                  </Text>
                  <DropdownComponent selectItem={(value)=>this.setState({roomType: value})} item={this.state.roomType} data={apartmentRoomType} />
                </View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    {I18n.t('post_video.room_count')}
                  </Text>
                  <TextInput
                    ref="roomCount"
                    autoCapitalize="none"
                    autoCorrect={ true }
                    placeholder={I18n.t('post_video.ph_room_count')}
                    placeholderTextColor={ commonColors.placeholderSubText }
                    textAlign="right"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    value={ this.state.roomCount }
                    onChangeText={ (text) => this.setState({ roomCount: text }) }
                  />
                </View>
                <View style={styles.itemView}>
                  <CheckBox
                    label={I18n.t('post_video.ownership')}
                    labelBefore={true}
                    labelStyle={{color: commonColors.placeholderText, fontSize: 14, fontFamily: commonStyles.normalFont, fontWeight: 'bold'}}
                    onChange={(checked) => this.setState({ownership: checked})}
                  />
                </View>
              </View>
            )}

            {(category == 'office') && (
              <View style={styles.itemView}>
                <Text style={styles.textTitle}>
                  {I18n.t('post_video.area_space')}
                </Text>
                <TextInput
                  ref="areaSpace"
                  autoCapitalize="none"
                  autoCorrect={ true }
                  placeholder={I18n.t('post_video.ph_area_space')}
                  placeholderTextColor={ commonColors.placeholderSubText }
                  textAlign="right"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  value={ this.state.areaSpace }
                  onChangeText={ (text) => this.setState({ areaSpace: text }) }
                />
              </View>
            )}

            {(category == 'gallery') && (
              <View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    {I18n.t('post_video.street_size')}
                  </Text>
                  <TextInput
                    ref="streetSize"
                    autoCapitalize="none"
                    autoCorrect={ true }
                    placeholder={I18n.t('post_video.ph_meter')}
                    placeholderTextColor={ commonColors.placeholderSubText }
                    textAlign="right"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    value={ this.state.streetSize }
                    onChangeText={ (text) => this.setState({ streetSize: text }) }
                  />
                </View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    {I18n.t('post_video.gallery_shop')}
                  </Text>
                  <TextInput
                    ref="galleryNumber"
                    autoCapitalize="none"
                    autoCorrect={ true }
                    placeholder={I18n.t('post_video.ph_gallery_number')}
                    placeholderTextColor={ commonColors.placeholderSubText }
                    textAlign="right"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    value={ this.state.galleryNumber }
                    onChangeText={ (text) => this.setState({ galleryNumber: text }) }
                  />
                </View>
              </View>
            )}

            {/* <View style={styles.titleView}>
              <Text style={styles.textTitle}>
                {I18n.t('post_video.category')}
              </Text>
            </View> */}

            <TouchableOpacity onPress={()=>this.onPreview()} activeOpacity={0.5}>
              <View style={styles.previewBtnView}>
                <Text style={styles.textPreview}>{I18n.t('sidebar.preview')}</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>
      </Container>
    );
  }
}

export default connect(state => ({
  tokenInfo: state.token.tokenInfo,
  regionData: state.regions.regionData
}),{ getRegions })(PostNewVideoPage);
