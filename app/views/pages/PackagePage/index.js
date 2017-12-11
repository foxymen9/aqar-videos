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

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Container from '../../layout/Container';
import { styles } from './styles';

export default class PackagePage extends Component {
  constructor(props) {
    super(props);
  }

  onItemSelect(rowData, rowID) {
    Actions.PackageDetail({data: rowData});
  }

  _renderRow (rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity 
        activeOpacity={0.6}
        onPress={()=>{this.onItemSelect(rowData, rowID)}}
      >
        <View style={styles.listItem}>
          <View style={styles.imageView}>
            <View style={[styles.roundContent, {backgroundColor: rowData.color}]}>
                <Text style={styles.number}>{rowData.number}</Text>
                <Text style={styles.day}>DAYS</Text>
            </View>
          </View>
          <View style={styles.footerView}>
            <Text  style={styles.textTitle}>{rowData.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  _renderSeparator (sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
          key={`${sectionID}-${rowID}`}
          style={{ height: 10, backgroundColor: 'transparent', flex:1}}
      />
    );
  }

  render() {
    let listData = [
      {
        number: 7,
        title: 'FREE',
        color: '#88AC40'
      },
      {
        number: 30,
        title: '99.SAR',
        color: '#2A90B6'
      },
      {
        number: 120,
        title: '399.SAR',
        color: '#F19100'
      },
      {
        number: 365,
        title: '599.SAR',
        color: '#EB0089'
      },
      
    ]
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(listData);

    return (
      <Container title='PACKAGE'>
        <View style={styles.container}>
          <ListView
              ref='listview'
              dataSource={dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              contentContainerStyle={styles.listView}
            />
        </View>
      </Container>
    );
  }
}