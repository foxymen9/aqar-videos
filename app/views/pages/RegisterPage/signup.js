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

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import I18n from '@i18n';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';
import { styles } from './styles';
import { userSignUp, changeMenu } from '@redux/User/actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      password: '',
      confirmPassword: '',
      email: '',  
      fullName: '',
      code: '',
      confirmCode: false,
    }
  }
  onConfirmPhoneNumber() {
    this.setState({confirmCode: true});
  }

  onSignUp() {
    this.props.userSignUp();
    this.props.changeMenu(0);
    Actions.Main();
  }

  render() {
    const { confirmCode } = this.state;
    
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          {confirmCode
          ?
          <View style={styles.fieldContainer}>
            <View style={styles.inputView}>
              <TextInput
                ref="fullName"
                autoCapitalize="none"
                autoCorrect={ true }
                placeholder={I18n.t('profile.ph_name')}
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                value={ this.state.fullName }
                onChangeText={ (text) => this.setState({ fullName: text }) }
                onSubmitEditing={ () => this.refs.mobileNumber.focus() }
              />
              <View style={styles.iconView}>
                <Icon name='user' style={styles.inputIcon}></Icon>
              </View>
            </View>
            <View style={styles.inputView}>
              <TextInput
                ref="confirmCode"
                autoCapitalize="none"
                autoCorrect={ false }
                placeholder={I18n.t('profile.ph_confirm_code')}
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                keyboardType="numbers-and-punctuation"
                value={ this.state.code }
                onChangeText={ (text) => this.setState({ code: text }) }
                onSubmitEditing={ () => this.refs.email.focus() }
              />
              <View style={styles.iconView}>
                <Icon name='eye' style={styles.inputIcon}></Icon>
              </View>
            </View>  
            <View style={styles.inputView}>
              <TextInput
                ref="email"
                autoCapitalize="none"
                autoCorrect={ false }
                placeholder={I18n.t('profile.ph_email')}
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                keyboardType="email-address"
                value={ this.state.email }
                onChangeText={ (text) => this.setState({ email: text }) }
                onSubmitEditing={ () => this.refs.password.focus() }
              />
              <View style={styles.iconView}>
                <Icon name='envelope' style={styles.inputIcon}></Icon>
              </View>
            </View>
            <View style={styles.inputView}>
              <TextInput
                ref="password"
                autoCapitalize="none"
                autoCorrect={ false }
                placeholder={I18n.t('profile.ph_password')}
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                secureTextEntry={true}
                value={ this.state.password }
                onChangeText={ (text) => this.setState({ password: text }) }
                onSubmitEditing={ () => this.refs.confirmPassword.focus() }
              />
              <View style={styles.iconView}>
                <Icon name='lock' style={styles.inputIcon}></Icon>
              </View>
            </View>
            <View style={styles.inputView}>
              <TextInput
                ref="confirmPassword"
                autoCapitalize="none"
                autoCorrect={ false }
                placeholder={I18n.t('profile.ph_confirm_password')}
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                secureTextEntry={true}
                value={ this.state.confirmPassword }
                onChangeText={ (text) => this.setState({ confirmPassword: text }) }
              />
              <View style={styles.iconView}>
                <Icon name='lock' style={styles.inputIcon}></Icon>
              </View>
            </View> 
          </View>
          :
          <View style={styles.fieldContainer}>
            <View style={styles.inputView}>
              <TextInput
                ref="mobileNumber"
                autoCapitalize="none"
                autoCorrect={ false }
                placeholder={I18n.t('profile.ph_mobile_number')}
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                keyboardType="numbers-and-punctuation"
                value={ this.state.mobile }
                onChangeText={ (text) => this.setState({ mobile: text }) }
              />
              <View style={styles.iconView}>
                <Icon name='screen-tablet' style={styles.inputIcon}></Icon>
              </View>
            </View>    
          </View>
          }
        </KeyboardAwareScrollView>
        {confirmCode
        ?
        <View style={styles.btnView}>
          <TouchableOpacity onPress={()=>this.onSignUp()} activeOpacity={0.5}>
            <View style={styles.btnWrapper}>
              <Text style={styles.btnText}>{I18n.t('signup')}</Text>
            </View>
          </TouchableOpacity>
        </View>
        :
        <View style={styles.btnView}>
          <TouchableOpacity onPress={()=>this.onConfirmPhoneNumber()} activeOpacity={0.5}>
            <View style={styles.btnWrapper}>
              <Text style={styles.btnText}>{I18n.t('profile.confirm_phone')}</Text>
            </View>
          </TouchableOpacity>
        </View>
        }
      </View>
    );
  }
}

export default connect(state => ({
}),{ userSignUp, changeMenu })(Signup);