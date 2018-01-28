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
			<Container title='SEARCH' type='detail'>
				<View style={styles.container}>
          <KeyboardAwareScrollView>
            <View style={styles.titleView}>
              <Text style={styles.textTitle}>
                Category
              </Text>
            </View>
            
            <CategoryComponent category={(item)=>this.setState({category: item})} />

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
            <TouchableOpacity onPress={()=>this.onSend()} activeOpacity={0.5}>
              <View style={styles.sendBtnView}>
                <Text style={styles.textSend}>SEARCH</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
				</View>
			</Container>
		);
	}
}