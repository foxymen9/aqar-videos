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
	TextInput
} from 'react-native';

import CheckBox from 'react-native-modest-checkbox';

import FontAwesome, {Icons} from 'react-native-fontawesome';
import Icon from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import I18n from '@i18n';
import Container from '@layout/Container';
import ModalShare from '@components/ModalShare';
import DropdownComponent from '@components/DropdownComponent';
import CategoryComponent from '@components/CategoryComponent';
import { RadioGroup, RadioButton } from '@components/RadioButtonGroup';

import { styles } from './styles';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';

export default class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
      category: 'building',
			productOption: 'Sale',
			region: '',
			city: '',
			district: ''
		}
	}

	onSelectCategory(item, index) {
		this.setState({category: item});

    if (index == 6 || index == 3) {
      this.refs.catoryScroll.scrollToEnd();
    }
    if (index == 0 || index == 4) {
      this.refs.catoryScroll.scrollTo({x: 0, y: 0, animated: true});
    }
	}

	onSend() {

	}

	onSelectProductOption(index, value) {
		this.setState({productOption: value})
	}

	render() {
    const {
      category
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
			<Container title={I18n.t('search')} type='detail'>
				<View style={styles.container}>
          <KeyboardAwareScrollView>
            <View style={styles.titleView}>
              <Text style={styles.textTitle}>
                {I18n.t('post_video.category')}
              </Text>
            </View>
            
            <CategoryComponent category={(item)=>this.setState({category: item})} />

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
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                {I18n.t('post_video.region')}
              </Text>
              <DropdownComponent selectItem={(value)=>this.setState({region: value})} item={this.state.region} data={regionData} />
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                {I18n.t('post_video.city')}
              </Text>
              <DropdownComponent selectItem={(value)=>this.setState({city: value})} item={this.state.city} data={cityData} />
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                {I18n.t('post_video.district')}
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
            {(category == 'building' || category == 'villa') && (
            <View style={styles.priceView}>
              <View style={styles.priceBox}>
                <TextInput
                  ref="maxPrice"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  multiline={true}
                  placeholder={I18n.t('post_video.max_price')}
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
                  placeholder={I18n.t('post_video.min_price')}
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
                  placeholder={I18n.t('post_video.max_squaremeter')}
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
                  placeholder={I18n.t('post_video.min_squaremeter')}
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
                    labelStyle={{color: commonColors.placeholderText, fontFamily: commonStyles.boldFont, fontWeight: 'bold'}}
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
                    labelStyle={{color: commonColors.placeholderText, fontFamily: commonStyles.boldFont, fontWeight: 'bold'}}
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
                    value={ this.state.street_size }
                    onChangeText={ (text) => this.setState({ street_size: text }) }
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
            <TouchableOpacity onPress={()=>this.onSend()} activeOpacity={0.5}>
              <View style={styles.sendBtnView}>
                <Text style={styles.textSend}>{I18n.t('search')}</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
				</View>
			</Container>
		);
	}
}