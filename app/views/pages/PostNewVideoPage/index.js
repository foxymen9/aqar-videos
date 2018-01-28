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
import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';
import CheckBox from 'react-native-modest-checkbox';

import ImagePicker from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/Feather';
import Container from '@layout/Container';
import ModalShare from '@components/ModalShare';
import {RadioGroup, RadioButton} from '@components/RadioButtonGroup';
import DropdownComponent from '@components/DropdownComponent';
import CategoryComponent from '@components/CategoryComponent';

import { styles } from './styles';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';

export default class PostNewVideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'building',
      title: '',
      description: '',
      price: '',
      productOption: 'Sale',
      region: '',
      city: '',
      district: '',
      period: '',
      buildingType: '',
      videoUri: null,
      minSquareMeter: '1000',
    }
    this.player = null;
  }

  onPreview() {
    const propsData = this.state;
    
    if (propsData.videoUri != null) {
      Actions.PostNewVideoPreview({data: propsData});
    }
  }

  onSelectProductOption(index, value) {
    this.setState({productOption: value})
  }

  selectCategory(item) {
    this.setState({category: item});
    this.refs.scrollContainer.scrollToEnd();
  }

  onCamera() {
    if (this.state.videoUri == null) {
      const options = {
        title: 'Record or Choose the Video',
        takePhotoButtonTitle: 'Record Video',
        chooseFromLibraryButtonTitle: 'Choose from Library',
        mediaType: 'video',
        allowsEditing: true,
        durationLimit: 180, //limit 3mins
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
          console.log('user cancelled');
        }
        else if (response.error) {
          console.log('ERROR' + response.error);
        }
        else if (response.customButton) {
          console.log('uer tapped' + response.customButton);
        }
        else {
          console.log('DATA', response);
          this.setState({videoUri: response.uri});
        }
      })
    }
    else {
      this.player.presentFullscreenPlayer();
      this.player.seek(0);
    }
  }

  render() {
    // const {videoData} = this.props;
    const {
      category, 
      videoUri
    } = this.state;  

    const regionData = [
      { value: 'Saudi Arabia' },
      { value: 'China' },
      { value: 'Japan' }
    ];

    const cityData = [
      { value: 'City1' },
      { value: 'City2' },
      { value: 'City3' }
    ];

    const districtData = [
      { value: 'Distrcit1' },
      { value: 'Distrcit2' },
      { value: 'Distrcit3' }
    ];

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

    return (
      <Container title='POST A NEW AD'>
        <View style={styles.container}>
          <KeyboardAwareScrollView ref="scrollContainer">
            <TouchableOpacity onPress={()=>this.onCamera()}>
              <View style={styles.videoView}>
              {videoUri != null 
              ?  <Video
                  ref={(ref)=> {this.player = ref}}
                  source={{uri: videoUri}}
                  style={styles.videoThumbnail}
                  resizeMode='cover'
                  autoplay={false}
                  onLoadStart={()=>this.player.presentFullscreenPlayer}
                />
              : <Icon name='video' style={styles.cameraIcon} />
              }
              </View>
            </TouchableOpacity>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                Title
              </Text>
              <TextInput
                ref="title"
                autoCapitalize="none"
                autoCorrect={ true }
                placeholder="Please name of your video"
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
                Description
              </Text>
              <TextInput
                ref="description"
                autoCapitalize="none"
                autoCorrect={ true }
                multiline={true}
                placeholder="Please add short description to your video"
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
                Price
              </Text>
              <TextInput
                ref="price"
                autoCapitalize="none"
                autoCorrect={ false }
                placeholder="SAR"
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
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                Region
              </Text>
              <DropdownComponent selectItem={(value)=>this.setState({region: value})} item={this.state.region} data={regionData} />
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                City
              </Text>
              <DropdownComponent selectItem={(value)=>this.setState({city: value})} item={this.state.city} data={cityData} />
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                District
              </Text>
              <DropdownComponent selectItem={(value)=>this.setState({district: value})} item={this.state.district} data={districtData} />
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
                  <Text style={styles.textDescription}>Sale</Text>
                </RadioButton>
                <RadioButton value={'Rent'}>
                  <Text style={styles.textDescription}>Rent</Text>
                </RadioButton>
              </RadioGroup>
              <Text style={styles.textTitle}>
                Product Option
              </Text>
            </View>
            {(category == 'building' || category == 'land') && (
              <View style={styles.itemView}>
                <Text style={styles.textTitle}>
                  Type
                </Text>
                <DropdownComponent selectItem={(value)=>this.setState({buildingType: value})} item={this.state.buildingType} data={buildingTypeData} />
              </View>
            )}
            {(category == 'building' || category == 'villa') && (
            <View style={styles.priceView}>
              <View style={styles.priceBox}>
                <TextInput
                  ref="maxPrice"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  multiline={true}
                  placeholder="Max.Price"
                  placeholderTextColor={ commonColors.placeholderSubText }
                  textAlign="right"
                  style={styles.inputPrice}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'done' }
                  keyboardType="numbers-and-punctuation"
                  value={ this.state.maxPrice }
                  onChangeText={ (text) => this.setState({ maxPrice: text }) }
                />
              </View>
              <Text style={styles.linebar}>-</Text>
              <View style={styles.priceBox}>
                <TextInput
                  ref="minPrice"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  multiline={true}
                  placeholder="Min.Price"
                  placeholderTextColor={ commonColors.placeholderSubText }
                  textAlign="right"
                  style={styles.inputPrice}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="numbers-and-punctuation"
                  value={ this.state.minPrice }
                  onChangeText={ (text) => this.setState({ minPrice: text }) }
                  onSubmitEditing={ () => this.refs.maxPrice.focus() }
                />
              </View>
            </View>)}

            {category == 'villa' && (
            <View style={styles.priceView}>
              <View style={styles.squareMeterBox}>
                <TextInput
                  ref="maxSquareMeter"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  multiline={true}
                  placeholder="Max.SquareMeter"
                  placeholderTextColor={ commonColors.placeholderSubText }
                  textAlign="right"
                  style={styles.inputPrice}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'done' }
                  keyboardType="numbers-and-punctuation"
                  value={ this.state.maxSquareMeter }
                  onChangeText={ (text) => this.setState({ maxSquareMeter: text }) }
                />
              </View>
              <Text style={styles.linebar}>-</Text>
              <View style={styles.squareMeterBox}>
                <TextInput
                  ref="minSquareMeter"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  multiline={true}
                  placeholder="Min.SquareMeter"
                  placeholderTextColor={ commonColors.placeholderSubText }
                  textAlign="right"
                  style={styles.inputPrice}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="numbers-and-punctuation"
                  value={ this.state.minSquareMeter }
                  onChangeText={ (text) => this.setState({ minSquareMeter: text }) }
                  onSubmitEditing={ () => this.refs.maxPrice.focus() }
                />
              </View>
            </View>)}
            {(category == 'apartment' || category == 'chalet') && (
              <View style={styles.itemView}>
                <Text style={styles.textTitle}>
                  Period
                </Text>
                <DropdownComponent selectItem={(value)=>this.setState({period: value})} item={this.state.period} data={periodData} />
              </View>
            )}
            {(category == 'apartment') && (
              <View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    Location
                  </Text>
                  <TextInput
                    ref="location"
                    autoCapitalize="none"
                    autoCorrect={ true }
                    placeholder="Please input location of aprtment"
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
                    label="Furniture"
                    labelBefore={true}
                    labelStyle={{color: commonColors.placeholderText, fontWeight: 'bold'}}
                    onChange={(checked) => this.setState({furniture: checked})}
                  />
                </View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    Room Type
                  </Text>
                  <DropdownComponent selectItem={(value)=>this.setState({roomType: value})} item={this.state.roomType} data={apartmentRoomType} />
                </View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    Room Count
                  </Text>
                  <TextInput
                    ref="roomCount"
                    autoCapitalize="none"
                    autoCorrect={ true }
                    placeholder="Please input room count"
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
                    label="Ownership"
                    labelBefore={true}
                    labelStyle={{color: commonColors.placeholderText, fontWeight: 'bold'}}
                    onChange={(checked) => this.setState({ownership: checked})}
                  />
                </View>
              </View>
            )}
            {(category == 'office') && (
              <View style={styles.itemView}>
                <Text style={styles.textTitle}>
                  Area Space
                </Text>
                <TextInput
                  ref="areaSpace"
                  autoCapitalize="none"
                  autoCorrect={ true }
                  placeholder="Please input area space"
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
                    Street Size
                  </Text>
                  <TextInput
                    ref="streetSize"
                    autoCapitalize="none"
                    autoCorrect={ true }
                    placeholder="Input meters (15, 30, ...)"
                    placeholderTextColor={ commonColors.placeholderSubText }
                    textAlign="right"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    value={ this.state.street_size }
                    onChangeText={ (text) => this.setState({ street_size: text }) }
                  />
                </View>
                <View style={styles.itemView}>
                  <Text style={styles.textTitle}>
                    Galleries & Shops Number
                  </Text>
                  <TextInput
                    ref="galleryNumber"
                    autoCapitalize="none"
                    autoCorrect={ true }
                    placeholder="Please input number"
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

            <View style={styles.titleView}>
              <Text style={styles.textTitle}>
                Category
              </Text>
            </View>
            <CategoryComponent category={(item)=>this.selectCategory(item)} />

            <TouchableOpacity onPress={()=>this.onPreview()} activeOpacity={0.5}>
              <View style={styles.previewBtnView}>
                <Text style={styles.textPreview}>PREVIEW</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>
      </Container>
    );
  }
}