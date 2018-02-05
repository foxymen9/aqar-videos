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
import { userSignIn, changeMenu } from '@redux/User/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      password: '',
      loading: false,
      isAlert: false,
    }
  }

  onLogin() {
    let data = {
      email: 'test@user.com',
      password:  '@test1234'
    };

    this.setState({loading: true});
    this.props.userSignIn(data, this.props.tokenInfo.token);
  }

  componentWillReceiveProps(nextProps) {
    const { userInfo, userLogin, loading } = nextProps;

    if (userInfo != null) {
      // console.log('USER_INFO', userInfo);
      this.setState({loading: false});
      if (userLogin) {
        this.props.changeMenu(0);
        Actions.Main();
      }
      else {
        this.setState({isAlert: true});
      }
    }
  }

  onForgotPassword() {

  }

  render() {
    const { userInfo } = this.props;
    return (
      <View style={styles.container}>
        <LoadingSpinner visible={this.state.loading } />
        {userInfo && (
          <CustomAlert 
            message={userInfo.errors.email_exists} 
            visible={this.state.isAlert} 
            closeAlert={()=>this.setState({isAlert: false})}
          />
        )}

        <KeyboardAwareScrollView>
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
  loading: state.user.loading,
}),{ userSignIn, changeMenu })(Login);