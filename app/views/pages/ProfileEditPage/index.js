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
import KeyboardScrollView from '@components/KeyboardView';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import I18n from '@i18n';
import Container from '@layout/Container';
import { styles } from './styles';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';

export default class ProfileEditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      password: '',
      confirmPassword: '',
      email: '',  
      fullName: '',
    }
  }

  onUpdate() {
    
  }

  render() {
    const {tabIndex} = this.state;
    return (
      <Container title={I18n.t('sidebar.my_profile')}>
        <View style={styles.container}>
          <KeyboardScrollView>
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
                  keyboardType="numbers-and-punctuation"
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
                  placeholder={I18n.t('profile.ph_email')}
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
                  placeholder={I18n.t('profile.ph_password')}
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="right"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  secureTextEntry
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
                  placeholderTextColor={commonColors.placeholderText}
                  textAlign="right"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  secureTextEntry
                  value={this.state.confirmPassword}
                  onChangeText={text => this.setState({ confirmPassword: text }) }
                />
                <View style={styles.iconView}>
                  <Icon name='lock' style={styles.inputIcon}></Icon>
                </View>
              </View>     
            </View>
          </KeyboardScrollView>
          <View style={styles.btnView}>
            <TouchableOpacity onPress={() => this.onUpdate()} activeOpacity={0.5}>
              <View style={styles.btnWrapper}>
                <Text style={styles.btnText}>{I18n.t('update')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}