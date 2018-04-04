import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  ListView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import FontAwesome, {Icons} from 'react-native-fontawesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import DatePicker from 'react-native-datepicker';

import I18n from '@i18n';
import Container from '@layout/Container';
import { styles } from './styles';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';

export default class ProfileEditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onUpdate() {
    
  }

  onChange(date) {
		this.setState({ date });
  }

  render() {
    const data = {
      price: 100,
      duration: 20,
      detail: {
        '1': {
          title: 'Test',
          deacription: 'Test'
        }
      }
    }

    return (
      <Container title={data.detail['1'].title} type='detail'>
        <View style={styles.container}>
          <KeyboardAwareScrollView>
            <View style={styles.fieldContainer}>

              <View style={styles.inputView}>
                <TextInput
                  ref="totalAmount"
                  autoCapitalize="none"
                  autoCorrect={ true }
                  placeholder={I18n.t('packages.total_amount')}
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="right"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="numbers-and-punctuation"
                  value={ this.state.totalAmount }
                  onChangeText={ (text) => this.setState({ totalAmount: text }) }
                  onSubmitEditing={ () => this.refs.accountNumber.focus() }
                />
              </View>

              <View style={styles.inputView}>
                <TextInput
                  ref="accountNumber"
                  autoCapitalize="none"
                  autoCorrect={ true }
                  placeholder={I18n.t('packages.account_number')}
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="right"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="numbers-and-punctuation"
                  value={ this.state.accountNumber }
                  onChangeText={ (text) => this.setState({ accountNumber: text }) }
                  onSubmitEditing={ () => this.refs.companyName.focus() }
                />
              </View>

              <View style={styles.inputView}>
                <TextInput
                  ref="companyName"
                  autoCapitalize="none"
                  autoCorrect={ true }
                  placeholder={I18n.t('packages.company_name')}
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="right"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="numbers-and-punctuation"
                  value={ this.state.companyName }
                  onChangeText={ (text) => this.setState({ companyName: text }) }
                  onSubmitEditing={ () => this.refs.bankNumber.focus() }
                />
              </View>

              <View style={styles.inputView}>
                <TextInput
                  ref="bankNumber"
                  autoCapitalize="none"
                  autoCorrect={ true }
                  placeholder={I18n.t('packages.bank_number')}
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="right"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="numbers-and-punctuation"
                  value={ this.state.bankNumber }
                  onChangeText={ (text) => this.setState({ bankNumber: text }) }
                  onSubmitEditing={ () => this.refs.senderName.focus() }
                />
              </View>

              <View style={styles.inputView}>
                <TextInput
                  ref="senderName"
                  autoCapitalize="none"
                  autoCorrect={ true }
                  placeholder={I18n.t('packages.sender_name')}
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="right"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="numbers-and-punctuation"
                  value={ this.state.senderName }
                  onChangeText={ (text) => this.setState({ senderName: text }) }
                  onSubmitEditing={ () => this.refs.referNumber.focus() }
                />
              </View>

              <View style={styles.inputView}>
                <TextInput
                  ref="referNumber"
                  autoCapitalize="none"
                  autoCorrect={ true }
                  placeholder={I18n.t('packages.refer_number')}
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="right"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="numbers-and-punctuation"
                  value={ this.state.referNumber }
                  onChangeText={ (text) => this.setState({ referNumber: text }) }
                  onSubmitEditing={ () => this.refs.bankName.focus() }
                />
              </View>

              <View style={styles.inputView}>
                <TextInput
                  ref="bankName"
                  autoCapitalize="none"
                  autoCorrect={ true }
                  placeholder={I18n.t('packages.bank_name')}
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="right"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="numbers-and-punctuation"
                  value={ this.state.bankName }
                  onChangeText={ (text) => this.setState({ bankName: text }) }
                  onSubmitEditing={ () => this.refs.bankName.focus() }
                />
              </View>

              <View style={styles.inputView}>
                <DatePicker
                  style={{width: '100%'}}
                  date={this.state.date}
                  mode="date"
                  placeholder={I18n.t('packages.date')}
                  format="YYYY-MM-DD"
                  minDate="2015-01-01"
                  maxDate="2050-12-31"
                  confirmBtnText={I18n.t('packages.confirm')}
                  cancelBtnText={I18n.t('packages.cancel')}
                  customStyles={{
                    dateInput: {
                      borderWidth: 0,
                      alignItems: 'flex-end',
                    },
                    placeholderText: {
                      color: commonColors.placeholderText
                    }
                    // ... You can check the source to find the other keys.
                  }}
                  iconComponent={
                    <View />
                  }
                  onDateChange={date => this.onChange(date)}
                />
              </View>
                
            </View>
          </KeyboardAwareScrollView>

          <View style={styles.btnView}>
            <TouchableOpacity onPress={()=>this.onUpdate()} activeOpacity={0.5}>
              <View style={styles.btnWrapper}>
                <Text style={styles.btnText}>{I18n.t('packages.try')}</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </Container>
    );
  }
}