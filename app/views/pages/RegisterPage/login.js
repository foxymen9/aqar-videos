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

import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';
import { styles } from './styles';
import { userSignIn, changeMenu } from '../../../redux/User/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      password: '',
    }
  }

  onLogin() {
    this.props.userSignIn();
    this.props.changeMenu(0);
    Actions.Main();
  }

  onForgotPassword() {

  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.fieldContainer}>
            <View style={styles.inputView}>
              <TextInput
                ref="mobileNumber"
                autoCapitalize="none"
                autoCorrect={ false }
                placeholder="Mobile Number"
                placeholderTextColor={ commonColors.placeholderText }
                textAlign="right"
                style={styles.input}
                underlineColorAndroid="transparent"
                returnKeyType={ 'next' }
                keyboardType="numbers-and-punctuation"
                value={ this.state.mobile }
                onChangeText={ (text) => this.setState({ mobile: text }) }
                onSubmitEditing={ () => this.refs.password.focus() }
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
                placeholder="Password"
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
                <Text style={styles.forgotPasswordText}>Forgot Password</Text>
              </TouchableOpacity>
            </View>       
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.btnView}>
          <TouchableOpacity onPress={()=>this.onLogin()} activeOpacity={0.5}>
            <View style={styles.btnWrapper}>
              <Text style={styles.btnText}>LOG IN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(state => ({
}),{ userSignIn, changeMenu })(Login);