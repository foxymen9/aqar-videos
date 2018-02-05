import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Modal
} from 'react-native';

export default class LoadingSpinner extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { visible } = this.props;
    console.log('VISIBLE', visible);
    return(
        <Modal
            animationType={'none'}
            transparent={true}
            visible={visible}
            onRequestClose={this.props.onDismissLoadingCallback}>
            <View style={{flex:1}}/>
            <View style={{
                height:80,
                width:80,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'#3434347f',
                borderRadius:10,alignSelf:'center'}}>
                <ActivityIndicator
                    animating={true}
                    size={"large"}
                    color={'white'}
                />
            </View>
            <View style={{flex:1}}/>
        </Modal>
    );
  }
}