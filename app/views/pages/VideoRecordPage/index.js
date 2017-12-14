import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import { styles } from './styles';
import Container from '../../layout/Container';

export default class VideoRecordPage extends Component {
  startRecord() {
    
  }
  render() {
    return (
      <Container title='VIDEO'>
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>this.startRecord()}>
            <Text>Start</Text>
          </TouchableOpacity>
          
        </View>
      </Container>
    )
  }
}