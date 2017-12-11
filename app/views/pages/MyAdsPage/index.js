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

import Container from '../../layout/Container';
import { styles } from './styles';
import FontAwesome, {Icons} from 'react-native-fontawesome';

export default class MyAdsPage extends Component {
  constructor(props) {
    super(props);
  }

  onItemSelect(rowData, rowID) {

  }

  _renderRow (rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity 
        activeOpacity={0.6}
        onPress={()=>{this.onItemSelect(rowData, rowID)}}
      >
        <View style={styles.listItem}>
        
          <View style={styles.imageView}>
            <Image source={{ uri: rowData.image}} style={ styles.image } />
          </View>
          <View style={styles.footerView}>
            <Text  style={styles.textTitle}>{rowData.title}</Text>
            <Text  style={styles.textPrice}>{rowData.price} SAR</Text>
            <View style={styles.viewWrapper}>
              <Text  style={styles.textViewCount}>number of view {rowData.viewCount}</Text>
              <FontAwesome style={styles.eye}>{Icons.eye}</FontAwesome>
            </View>
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
        image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
        title: 'Apartment for Rent',
        price: '28.000',
        capacity: '70M',
        viewCount: '500',
        favorite: true,
      },
      {
        image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
        title: 'Apartment for Rent',
        price: '15.000',
        capacity: '170M',
        viewCount: '500',
        favorite: false,
      },
      {
        image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
        title: 'Apartment for Rent',
        price: '23.000',
        capacity: '80M',
        viewCount: '500',
        favorite: true,
      },
      {
        image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
        title: 'Apartment for Rent',
        price: '32.000',
        capacity: '120M',
        viewCount: '500',
        favorite: false,
      },
    ]
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(listData);

    return (
      <Container title='MY ADS (3)'>
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