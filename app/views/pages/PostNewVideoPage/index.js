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
import {RadioGroup, RadioButton} from '../../components/RadioButtonGroup';
import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';

import ImagePicker from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/Feather';
import Container from '../../layout/Container';
import ModalShare from '@components/ModalShare';
import DropdownComponent from '@components/DropdownComponent';
import CategoryComponent from '@components/CategoryComponent';

import { styles } from './styles';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';

export default class PostNewVideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: '',
      productOption: 'Sale',
      region: '',
      city: '',
      district: '',
      videoUri: null,
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

  onCamera() {
    if (this.state.videoUri == null) {
      const options = {
        title: 'Record or Choose the Video',
        takePhotoButtonTitle: 'Record Video',
        chooseFromLibraryButtonTitle: 'Choose from Library',
        mediaType: 'video',
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
    const {title, description, price, productOption, region, city, district, videoUri} = this.state;  

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

    return (
      <Container title='POST A NEW AD'>
        <View style={styles.container}>
          <KeyboardAwareScrollView>
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
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                value={ title }
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
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                value={ description }
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
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                keyboardType="number-pad"
                value={ price }
                onChangeText={ (text) => this.setState({ price: text }) }
                onSubmitEditing={ () => this.refs.password.focus() }
              />
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                Region
              </Text>
              <DropdownComponent selectItem={(value)=>this.setState({region: value})} item={region} data={regionData} />
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                City
              </Text>
              <DropdownComponent selectItem={(value)=>this.setState({city: value})} item={city} data={cityData} />
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                District
              </Text>
              <DropdownComponent selectItem={(value)=>this.setState({district: value})} item={district} data={districtData} />
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
            <View style={styles.titleView}>
              <Text style={styles.textTitle}>
                Category
              </Text>
            </View>

            <CategoryComponent category={(item)=>this.setState({category: item})} />

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