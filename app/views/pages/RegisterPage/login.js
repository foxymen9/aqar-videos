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
  Alert,
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import TextInputMask from 'react-native-text-input-mask';

import CustomAlert from '@components/CustomAlert';
import LoadingSpinner from '@components/LoadingSpinner';

import I18n from '@i18n';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';
import { styles } from './styles';
import { userSignIn, forgotPassword, changeMenu } from '@redux/User/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'test@user.com',
      password: '@test1234',
      loading: false,
      isLoginAlert: false,    //show signin result
      isForgotAlert: false,   //show if email is numm 
      isForgotResultAlert: false,   //show forgot password reuslt
    }
  }

  componentWillReceiveProps(nextProps) {
    const { userInfo, userLogin, forgotPasswordResult, loading } = nextProps;

    if (userInfo != null) {
      // console.log('USER_INFO', userInfo);
      this.setState({loading: false});
      if (userLogin) {
        this.props.changeMenu(0);
        Actions.Main();
      }
      else {
        this.setState({isLoginAlert: true});
      }
    }

    if (forgotPasswordResult != null) {
      console.log('LLLLLLL', forgotPasswordResult);
      this.setState({loading: false});
      this.setState({isForgotResultAlert: true});
    }
  }

  onLogin() {
    this.setState({loading: true});
    
    let data = {
      email: this.state.email,
      password:  this.state.password
    };
    this.props.userSignIn(data, this.props.tokenInfo.token);
  }

  onForgotPassword() {
    if (this.state.email == '') {
      this.setState({isForgotAlert: true});
    }
    else {
      this.setState({loading: true});

      let data = {
        email: this.state.email
      };
      this.props.forgotPassword(data, this.props.tokenInfo.token);
    }
  }

  render() {
    const { userInfo, forgotPasswordResult } = this.props;

    return (
      <View style={styles.container}>
        <LoadingSpinner visible={this.state.loading } />
        {userInfo && (
          <CustomAlert 
            title="Error"
            message={userInfo.errors.email_exists} 
            visible={this.state.isLoginAlert} 
            closeAlert={()=>this.setState({isLoginAlert: false})}
          />
        )}

        {forgotPasswordResult && (
          <CustomAlert 
            title="Error"
            message={forgotPasswordResult.message} 
            visible={this.state.isForgotResultAlert} 
            closeAlert={()=>this.setState({isForgotResultAlert: false})}
          />
        )}
        
        <CustomAlert 
          title="Warning"
          message="Please input your email"
          visible={this.state.isForgotAlert} 
          closeAlert={()=>this.setState({isForgotAlert: false})}
        />

        <KeyboardAwareScrollView>
          <View style={styles.fieldContainer}>
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
              />
              <View style={styles.iconView}>
                <Icon name='lock' style={styles.inputIcon}></Icon>
              </View>
            </View>   
            <View style={styles.forgotPasswordView}>
              <TouchableOpacity onPress={()=>this.onForgotPassword()}>
                <Text style={styles.forgotPasswordText}>{I18n.t('profile.forgot_password')}</Text>
              </TouchableOpacity>
            </View>       
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.btnView}>
          <TouchableOpacity onPress={()=>this.onLogin()} activeOpacity={0.5}>
            <View style={styles.btnWrapper}>
              <Text style={styles.btnText}>{I18n.t('login')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(state => ({
  tokenInfo: state.token.tokenInfo,
  userInfo: state.user.userInfo,
  userLogin: state.user.userLogin,
  forgotPasswordResult: state.user.forgotPasswordResult,
  loading: state.user.loading,
}),{ userSignIn, forgotPassword, changeMenu })(Login);