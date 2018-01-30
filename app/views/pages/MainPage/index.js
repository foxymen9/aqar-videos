import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import Container from '@layout/Container';
import TabView from '@layout/TabView';
import ButtonPlusComponent from '@components/ButtonPlusComponent';
import MapButtonListComponent from '@components/MapButtonListComponent';

import { styles } from './styles';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isBtnList: false,
      tabIndex: 0,
      btnItem: null,
      btnStatus: 'map',
    }
  }

  onSelectItem(index) {
    const {btnStatus} = this.state;

    switch(index) {
      case 'plus':
        this.setState({isBtnList: !this.state.isBtnList});
        break;
      case 'list':
        if (btnStatus == 'map')
          this.setState({btnStatus: 'list'});
        else
          this.setState({btnStatus: 'map'});
        break;
      case 'mail':
        break;
      case 'video':
        break;
      default:
        break;
    }
    this.setState({isBtnList: !this.state.isBtnList});
  }

  changeTab(index) {
    this.setState({btnStatus: 'map'})
  }

  render() {
    const {tabIndex, isBtnList, btnItem, btnStatus} = this.state;
    const title = btnStatus == 'list' ? 'LIST' : 'MAP';

    return (
      <Container title={title}>
        <View style={styles.container}>
          <TabView btnStatus={btnStatus} changeTab={(index)=>this.changeTab(index)}/>
          {isBtnList && (
            <MapButtonListComponent  onSelectItem={(value)=>this.onSelectItem(value)} btnStatus={btnStatus} />
          )}
          <ButtonPlusComponent isBtnList={isBtnList} onSelectItem={(value)=>this.onSelectItem(value) }/>
        </View>
      </Container>
    );
  }
}