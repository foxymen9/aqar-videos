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

import Container from '../../layout/Container';
import { styles } from './styles';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

export default class SupportAdvertisementPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const {tabIndex} = this.state;
    return (
      <Container title={'SUPPORT & ADVERTISEMENT'} type='support'>
        <View style={styles.container}>
          <KeyboardAwareScrollView>
            <View style={styles.fieldContainer}>
              <View style={styles.inputView}>
                <TextInput
                  ref="fullName"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  placeholder="Fullname"
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="right"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="numbers-and-punctuation"
                  value={ this.state.mobile }
                  onChangeText={ (text) => this.setState({ fullName: text }) }
                  onSubmitEditing={ () => this.refs.fullName.focus() }
                />
                <View style={styles.iconView}>
                  <Icon name='user' style={styles.inputIcon}></Icon>
                </View>
              </View>
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
                  onSubmitEditing={ () => this.refs.email.focus() }
                />
                <View style={styles.iconView}>
                  <Icon name='screen-tablet' style={styles.inputIcon}></Icon>
                </View>
              </View>
              <View style={styles.inputView}>
                <TextInput
                  ref="email"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  placeholder="E-mail (Optional)"
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="right"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="numbers-and-punctuation"
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
                  placeholder="Password"
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
                  placeholder="Confirm Password"
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
          </KeyboardAwareScrollView>
          <View style={styles.btnView}>
            <TouchableOpacity onPress={()=>this.onSignUp()} activeOpacity={0.5}>
              <View style={styles.btnWrapper}>
                <Text style={styles.btnText}>UPDATE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}