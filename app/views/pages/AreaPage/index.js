import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import Container from '../../layout/Container';
import MapPage from '../MapPage';
import BuildingListPage from '../BuildingListPage';
import ButtonPlusComponent from '../../components/ButtonPlusComponent';
import MapButtonListComponent from '../../components/MapButtonListComponent';

import { styles } from './styles';

export default class AreaPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isBtnList: false,
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

  render() {
    const {isBtnList, btnItem, btnStatus} = this.state;
    const title = btnStatus == 'list' ? 'LIST' : 'AREA';

    return (
      <Container title={title}>
        <View style={styles.container}>
          {btnStatus == 'list'
          ? <BuildingListPage />
          : <MapPage page="building" />
          }
          {isBtnList && (
            <MapButtonListComponent  onSelectItem={(value)=>this.onSelectItem(value)} />
          )}
          <ButtonPlusComponent isBtnList={isBtnList} onSelectItem={(value)=>this.onSelectItem(value) }/>
        </View>
      </Container>
    );
  }
}