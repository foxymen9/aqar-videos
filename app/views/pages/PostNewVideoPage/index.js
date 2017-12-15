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
import Icon from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';

import Container from '../../layout/Container';
import ModalShare from '../../components/ModalShare';
import DropdownComponent from '../../components/DropdownComponent';

import { styles } from './styles';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

const icon_building = require('../../../common/assets/images/product_detail/building.png');
const icon_building_select = require('../../../common/assets/images/product_detail/building2.png');
const icon_flat = require('../../../common/assets/images/product_detail/flat.png');
const icon_flat_select = require('../../../common/assets/images/product_detail/flat2.png');
const icon_office = require('../../../common/assets/images/product_detail/office2.png');
const icon_office_select = require('../../../common/assets/images/product_detail/office.png');
const icon_room = require('../../../common/assets/images/product_detail/room.png');
const icon_room_select = require('../../../common/assets/images/product_detail/room2.png');
const icon_shop = require('../../../common/assets/images/product_detail/shop.png');
const icon_shop_select = require('../../../common/assets/images/product_detail/shop2.png');

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
      district: ''
    }
  }

  onSelectCategory(item, index) {
    this.setState({category: item});
    if (index == 3 || index == 4) {
      this.refs.catoryScroll.scrollToEnd();
    }
    if (index == 0 || index == 1) {
      this.refs.catoryScroll.scrollTo({x: 0, y: 0, animated: true});
    }
  }

  onPreview() {
    Actions.PostNewVideoPreview();
  }

  onSelectProductOption(index, value) {
    this.setState({productOption: value})
  }

  onCamera() {
    
  }

  render() {
    // const {videoData} = this.props;
    const {category} = this.state;  

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

    const videoUri = 'aaa';

    return (
      <Container title='POST A NEW AD'>
        <View style={styles.container}>
          <KeyboardAwareScrollView>
            <TouchableOpacity onPress={()=>this.onCamera()}>
              <View style={styles.videoView}>
                {/* <Video
                  source={{uri: videoUri}}
                  style={styles.videoThumbnail}
                /> */}
              </View>
            </TouchableOpacity>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                Title
              </Text>
              <TextInput
                ref="title"
                autoCapitalize="none"
                autoCorrect={ false }
                placeholder="Please name of your video"
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                keyboardType="numbers-and-punctuation"
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
                autoCorrect={ false }
                multiline={true}
                placeholder="Please add short description to your video"
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                keyboardType="numbers-and-punctuation"
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
                placeholderTextColor={ commonColors.placeholderText }
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
            <View style={styles.titleView}>
              <Text style={styles.textTitle}>
                Category
              </Text>
            </View>
            <ScrollView 
              ref='catoryScroll'
              style={styles.categoryScrollView} 
              horizontal={true}
              alwaysBounceHorizontal={false}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.categoryView}>
                <TouchableOpacity onPress={()=>this.onSelectCategory('building', 0)} activeOpacity={0.5}>
                  <View style={[styles.btnCategory, category=='building' && styles.categoryBack]}>
                    {category == 'building'
                      ? <Image source={icon_building_select} style={styles.icon} />
                      : <Image source={icon_building} style={styles.icon} />
                    }
                    <Text style={category == 'building' ? styles.textCategorySelect : styles.textCategory}>Building</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onSelectCategory('flat', 1)} activeOpacity={0.5}>
                  <View style={[styles.btnCategory, category=='flat' && styles.categoryBack]}>
                    {category == 'flat'
                      ? <Image source={icon_flat_select} style={styles.icon} />
                      : <Image source={icon_flat} style={styles.icon} />
                    }
                    <Text style={category == 'flat' ? styles.textCategorySelect : styles.textCategory}>Flat</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onSelectCategory('office', 2)} activeOpacity={0.5}>
                  <View style={[styles.btnCategory, category=='office' && styles.categoryBack]}>
                    {category == 'office'
                      ? <Image source={icon_office_select} style={styles.icon} />
                      : <Image source={icon_office} style={styles.icon} />
                    }
                    <Text style={category == 'office' ? styles.textCategorySelect : styles.textCategory}>Office</Text>
                  </View> 
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onSelectCategory('room', 3)} activeOpacity={0.5}>
                  <View style={[styles.btnCategory, category=='room' && styles.categoryBack]}>
                    {category == 'room'
                      ? <Image source={icon_room_select} style={styles.icon} />
                      : <Image source={icon_room} style={styles.icon} />
                    }
                    <Text style={category == 'room' ? styles.textCategorySelect : styles.textCategory}>Room</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onSelectCategory('shop', 4)} activeOpacity={0.5}>
                  <View style={[styles.btnCategory, category=='shop' && styles.categoryBack]}>
                    {category == 'shop'
                      ? <Image source={icon_shop_select} style={styles.icon} />
                      : <Image source={icon_shop} style={styles.icon} />
                    }
                    <Text style={category == 'shop' ? styles.textCategorySelect : styles.textCategory}>Shop</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
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