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
import TextInputMask from 'react-native-text-input-mask';
import StepIndicator from 'react-native-step-indicator';

import CustomAlert from '@components/CustomAlert';
import LoadingSpinner from '@components/LoadingSpinner';

import I18n from '@i18n';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';
import { styles, wizardStyle } from './styles';
import { verifyPhone, verifyCode, userSignUp, changeMenu } from '@redux/User/actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      mobile: '+8618841565317',
      code: '1234567',
      password: '',
      confirmPassword: '',
      email: '',  
      firstName: '',
      lastName: '',
      verifyStep: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { verifyPhoneInfo, verifyCodeInfo } = nextProps;
    if (verifyPhoneInfo) {
      console.log('PHONE_INFO', verifyPhoneInfo);
      this.setState({loading: false});
      this.setState({isAlert: true});
    }
    if (verifyCodeInfo) {
      console.log('CODE_INFO', verifyCodeInfo);
      this.setState({loading: false});
      this.setState({isAlert: true});
    }
  }
  
  //Verify phone number (step 1)
  onVerifyPhone() {
    let data = {
      phone: this.state.mobile
    }
    this.setState({loading: true});
    this.props.verifyPhone(data, this.props.tokenInfo.token);
  }

  //Verify received code (step 2)
  onVerifyCode() {
    let data = {
      phone: this.state.mobile,
      code: this.state.code,
    }
    this.setState({loading: true});
    this.props.verifyCode(data, this.props.tokenInfo.token);
  }

  checkCodeResult() {
    this.setState({isAlert: false});
    if (this.props.verifyCodeInfo.message == 'Invalid Code!')
      this.setState({verifyStep: 0});
    else
      this.setState({verifyStep: 2});
  }

  onSignUp() {
    let data = {
      firstname: this.state.firstName,
      lastname: this.state.lastnName,
      email: this.state.email,
      password: this.state.password,
      confirm: this.state.confirmPassword,
      telephone: this.state.mobile
    }
    this.setState({loading: true});
    this.props.userSignUp(data, this.props.tokenInfo.token);
    this.props.changeMenu(0);
    // Actions.Main();
  }

  render() {

    return (
      <View style={styles.container}>
        <LoadingSpinner visible={this.state.loading } />

        {this.props.verifyPhoneInfo && (
          <CustomAlert 
            title="Success"
            message={this.props.verifyPhoneInfo.message} 
            visible={this.state.isAlert} 
            closeAlert={()=>{ this.setState({isAlert: false, verifyStep: 1}); }}
          />)}

        {this.props.verifyCodeInfo && (
          <CustomAlert 
            title="Error"
            message={this.props.verifyCodeInfo.message} 
            visible={this.state.isAlert} 
            closeAlert={()=>{ this.checkCodeResult() }}
          />)}

        <View style={styles.wizard}>      
          <StepIndicator
              customStyles={wizardStyle}
              currentPosition={this.state.verifyStep}
              labels={[I18n.t('profile.wizard_phone'), I18n.t('profile.wizard_code'), I18n.t('profile.wizard_signup')]}
              stepCount={3}
          />
        </View>

        <KeyboardAwareScrollView>
          {this.state.verifyStep == 2 && (
          <View style={styles.fieldContainer}>
            <View style={styles.inputView}>
              <TextInput
                ref="firstName"
                autoCapitalize="none"
                autoCorrect={ true }
                placeholder={I18n.t('profile.ph_firstname')}
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                value={ this.state.firstName }
                onChangeText={ (text) => this.setState({ firstName: text }) }
                onSubmitEditing={ () => this.refs.lastName.focus() }
              />
              <View style={styles.iconView}>
                <Icon name='user' style={styles.inputIcon}></Icon>
              </View>
            </View>
            <View style={styles.inputView}>
              <TextInput
                ref="Last Name"
                autoCapitalize="none"
                autoCorrect={ true }
                placeholder={I18n.t('profile.ph_lasttname')}
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                value={ this.state.lastName }
                onChangeText={ (text) => this.setState({ lastName: text }) }
                onSubmitEditing={ () => this.refs.mobileNumber.focus() }
              />
              <View style={styles.iconView}>
                <Icon name='user' style={styles.inputIcon}></Icon>
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
              <TextInputMask 
                mask={"+[00000000000000]"} 
                ref="mobileNumber"
                autoCapitalize="none"
                autoCorrect={ false }
                placeholder={I18n.t('profile.ph_mobile_number')}
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                keyboardType="phone-pad"
                value={ this.state.mobile }
                onChangeText={ (text) => this.setState({ mobile: text }) }
              />
              <View style={styles.iconView}>
                <Icon name='screen-tablet' style={styles.inputIcon}></Icon>
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
          </View>)}

          {this.state.verifyStep == 1 && (
          <View style={styles.fieldContainer}>
            <View style={styles.inputView}>
              <TextInputMask 
                mask={"+[00000000000000]"} 
                ref="mobileNumber"
                autoCapitalize="none"
                autoCorrect={ false }
                placeholder={I18n.t('profile.ph_mobile_number')}
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                keyboardType="phone-pad"
                value={ this.state.mobile }
                onChangeText={ (text) => this.setState({ mobile: text }) }
              />
              <View style={styles.iconView}>
                <Icon name='screen-tablet' style={styles.inputIcon}></Icon>
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
          </View>)}

          {this.state.verifyStep == 0 && (
          <View style={styles.fieldContainer}>
            <View style={styles.inputView}>
              <TextInputMask 
                mask={"+[00000000000000]"} 
                ref="mobileNumber"
                autoCapitalize="none"
                autoCorrect={ false }
                placeholder={I18n.t('profile.ph_mobile_number')}
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                keyboardType="phone-pad"
                value={ this.state.mobile }
                onChangeText={ (text) => this.setState({ mobile: text }) }
              />
              <View style={styles.iconView}>
                <Icon name='screen-tablet' style={styles.inputIcon}></Icon>
              </View>
            </View>
          </View>)}
        </KeyboardAwareScrollView>

        {this.state.verifyStep == 2 && (
        <View style={styles.btnView}>
          <TouchableOpacity onPress={()=>this.onSignUp()} activeOpacity={0.5}>
            <View style={styles.btnWrapper}>
              <Text style={styles.btnText}>{I18n.t('signup')}</Text>
            </View>
          </TouchableOpacity>
        </View>)}

        {this.state.verifyStep == 1 && (
        <View style={styles.btnView}>
          <TouchableOpacity onPress={()=>this.onVerifyCode()} activeOpacity={0.5}>
            <View style={styles.btnWrapper}>
              <Text style={styles.btnText}>{I18n.t('profile.confirm_code')}</Text>
            </View>
          </TouchableOpacity>
        </View>)}

        {this.state.verifyStep == 0 && (
        <View style={styles.btnView}>
          <TouchableOpacity onPress={()=>this.onVerifyPhone()} activeOpacity={0.5}>
            <View style={styles.btnWrapper}>
              <Text style={styles.btnText}>{I18n.t('profile.confirm_phone')}</Text>
            </View>
          </TouchableOpacity>
        </View>)}
      </View>
    );
  }
}

export default connect(state => ({
  tokenInfo: state.token.tokenInfo,
  verifyPhoneInfo: state.user.verifyPhoneInfo,
  verifyCodeInfo: state.user.verifyCodeInfo,
}),{ verifyPhone, verifyCode, userSignUp, changeMenu })(Signup);