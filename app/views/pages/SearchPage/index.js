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

import FontAwesome, {Icons} from 'react-native-fontawesome';
import Icon from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Container from '../../layout/Container';
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
            <View style={styles.priceView}>
              <View style={styles.priceBox}>
                <TextInput
                  ref="maxPrice"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  multiline={true}
                  placeholder="Max.Price"
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="right"
                  style={styles.input}
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
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="right"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="numbers-and-punctuation"
                  value={ this.state.minPrice }
                  onChangeText={ (text) => this.setState({ minPrice: text }) }
                  onSubmitEditing={ () => this.refs.maxPrice.focus() }
                />
              </View>
            </View>
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