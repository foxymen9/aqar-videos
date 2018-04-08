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

import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import I18n from '@i18n';
import Container from '@layout/Container';
import { styles } from './styles';
import FontAwesome, {Icons} from 'react-native-fontawesome';

export default class MyWishListPage extends Component {
  constructor(props) {
    super(props);
    state = {
      listData: [],
    }
  }

  componentWillMount() {
    let listData = [
      {
        image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
        title: 'Luxury Apartment Riyadh',
        price: '28.000',
        capacity: '70M',
        viewCount: '500',
        favorite: true,
      },
      {
        image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
        title: 'Apartment for Rent1',
        price: '15.000',
        capacity: '170M',
        viewCount: '500',
        favorite: false,
      },
      {
        image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
        title: 'Apartment for Rent2',
        price: '23.000',
        capacity: '80M',
        viewCount: '500',
        favorite: true,
      },
      {
        image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
        title: 'Apartment for Rent3',
        price: '32.000',
        capacity: '120M',
        viewCount: '500',
        favorite: false,
      },
      {
        image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
        title: 'Apartment for Rent4',
        price: '23.000',
        capacity: '80M',
        viewCount: '500',
        favorite: true,
      },
      {
        image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
        title: 'Apartment for Rent5',
        price: '32.000',
        capacity: '120M',
        viewCount: '500',
        favorite: false,
      },
      {
        image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
        title: 'Apartment for Rent6',
        price: '23.000',
        capacity: '80M',
        viewCount: '500',
        favorite: true,
      },
      {
        image: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg',
        title: 'Apartment for Rent7',
        price: '32.000',
        capacity: '120M',
        viewCount: '500',
        favorite: false,
      },
    ];
    this.setState({listData: listData});
  }

  onItemSelect(rowData, rowID) {

  }

  onItemDelete(rowData, secId, rowId, rowMap) {
    if (rowMap[`${secId}${rowId}`]) {
			rowMap[`${secId}${rowId}`].closeRow();
		}
    const {listData} = this.state;
    let data = listData.splice(rowId, 1);
    this.setState({listData: listData});
  }

  render() {
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(this.state.listData);
    
    return (
      <Container title={I18n.t('sidebar.my_wishlist')}>
        <View style={styles.container}>
          <SwipeListView
            dataSource={dataSource}
            renderRow={ (rowData, secId, rowId, rowMap) => (
              <SwipeRow
                disableRightSwipe
                rightOpenValue={-50}
              >
                <View style={styles.listRightView}>
                  <TouchableOpacity
                    style={styles.btnDeleteView}
                    activeOpacity={0.9}
                    onPress={()=> {
                      this.onItemDelete(rowData, secId, rowId, rowMap);
                    }}
                  >
                    <FontAwesome style={styles.iconDelete}>{Icons.trash}</FontAwesome>
                  </TouchableOpacity>
                </View>
                <View style={styles.listStyle}>
                  <View style={styles.listItem}>
                    <View style={styles.imageView}>
                      <Image source={{ uri: rowData.image}} style={styles.image} />
                    </View>
                    <View style={styles.footerView}>
                      <Text style={styles.textTitle}>{rowData.title}</Text>
                      <View style={styles.bottomWrapper}> 
                        <Text  style={styles.textPrice}>{rowData.price} {I18n.t('sar')}</Text>
                        <View style={styles.viewWrapper}>
                          <Text  style={styles.textViewCount}>{I18n.t('number_of_view')} {rowData.viewCount}</Text>
                          <FontAwesome style={styles.eye}>{Icons.eye}</FontAwesome>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </SwipeRow>
            )}
          />
        </View>
      </Container>
    );
  }
}