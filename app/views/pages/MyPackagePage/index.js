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
import LoadingSpinner from '@components/LoadingSpinner';

import I18n from '@i18n';
import Container from '@layout/Container';
import { styles } from './styles';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';
import { getPackages } from '@redux/Package/actions';

class MyPackagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      colorData: ['#88AC40', '#2A90B6', '#F19100', commonColors.pinkColor, '#88AC40', '#2A90B6', '#F19100', commonColors.pinkColor],
    }
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  onItemSelect(rowData, rowID) {
    Actions.MyPackageDetail({data: rowData});
  }

  _renderRow (rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity 
        activeOpacity={0.6}
        onPress={()=>{this.onItemSelect(rowData)}}
      >
        <View style={styles.listItem}>
          <View style={styles.imageView}>
            <View style={[styles.roundContent, {backgroundColor: this.state.colorData[rowID]}]}>
                <Text style={styles.number}>{rowData.detail['1']['title']}</Text>
                <Text style={styles.day}>{rowData.duration}{I18n.t('packages.days')}</Text>
            </View>
          </View>
          <View style={styles.footerView}>
            <Text style={styles.textTitle}>{rowData.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  _renderRowExpired (rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity 
        activeOpacity={0.6}
      >
        <View style={styles.listItem}>
          <View style={styles.imageView}>
            <View style={[styles.roundContent, {backgroundColor: this.state.colorData[rowID]}]}>
                <Text style={styles.number}>{rowData.detail['1'].title}</Text>
                <Text style={styles.day}>{rowData.duration}</Text>
            </View>
          </View>
          <View style={styles.footerView}>
            <Text style={styles.textTitle}>{rowData.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  _renderSeparator (sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
          key={`${sectionID}-${rowID}`}
          style={{ height: 15, backgroundColor: 'transparent', flex:1}}
      />
    );
  }

  render() {   
    let currentPackage = [
      {
        package_id: '1',
        detail: 
        {
          '1': {
            'title': 'test 1',
            'description': '',
            'start_date': '2018-3-10',
            'end_date': '2018-3-31',
          }
        },
        price: '$100.00',
        duration: '11'
      }
    ];
    let dataSource;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    dataSource = ds.cloneWithRows(currentPackage);
    let expiredPackage = [
      {
        package_id: '2',
        detail: 
        {
          '1': {
            'title': 'test 2',
            'description': '',
            'start_date': '2018-1-10',
            'end_date': '2018-1-21',
          }
        },
        price: '$200.00',
        duration: 'منتهية الصلاحية'
      },
      {
        package_id: '3',
        detail: 
        {
          '1': {
            'title': 'test 3',
            'description': '',
            'start_date': '2018-2-10',
            'end_date': '2018-2-31',
          }
        },
        price: '$300.00',
        duration: 'منتهية الصلاحية'
      }
    ];
    let dataSourceExpired;
    const ds_expired = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    dataSourceExpired = ds_expired.cloneWithRows(expiredPackage);

    return (
      <Container title={I18n.t('sidebar.my_packages')}>
        <LoadingSpinner visible={this.state.loading } />
        <View style={styles.container}>
          <Text>الرزمة الحالية</Text>
          <ListView
            ref='listview'
            dataSource={dataSource}
            renderRow={this._renderRow.bind(this)}
            renderSeparator={this._renderSeparator}
            contentContainerStyle={styles.listView}
          />
          <Text>انتهت الحزمة</Text>
          <ListView
            ref='listview'
            dataSource={dataSourceExpired}
            renderRow={this._renderRowExpired.bind(this)}
            renderSeparator={this._renderSeparator}
            contentContainerStyle={styles.listView}
          />
        </View>
      </Container>
    );
  }
}

export default MyPackagePage;
