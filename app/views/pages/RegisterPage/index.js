import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  ListView,
  TouchableOpacity,
  Image,
} from 'react-native';

import FontAwesome, {Icons} from 'react-native-fontawesome';

import Container from '../../layout/Container';
import Login from './login';
import Signup from './signup';

import { styles } from './styles';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 'login'
    }
  }

  onTab(index) {
    this.setState({tabIndex: index});
  }

  render() {
    const {tabIndex} = this.state;
    return (
      <Container title={'register'}  type='register'>
        <View style={styles.tabBar}>
          <TouchableOpacity activeOpacity={0.8} onPress={()=>this.onTab('login')} style={styles.tbnWrapper}>
            <View style={[styles.tabBtn, {backgroundColor: tabIndex=='login' ? '#EB0089' : '#DBDBDB'}]}>
              <Text style={styles.tabText}>LOG IN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={()=>this.onTab('signup')} style={styles.tbnWrapper}>
            <View style={[styles.tabBtn, {backgroundColor: tabIndex=='signup' ? '#EB0089' : '#DBDBDB'}]}>
              <Text style={styles.tabText}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
        {tabIndex=='login'
          ?<Login />
          :<Signup />
        }
        </View>
      </Container>
    );
  }
}