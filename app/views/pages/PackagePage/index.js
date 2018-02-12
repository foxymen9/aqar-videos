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

class PackagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      colorData: ['#88AC40', '#2A90B6', '#F19100', commonColors.pinkColor, '#88AC40', '#2A90B6', '#F19100', commonColors.pinkColor],
    }
  }

  componentWillMount() {
    this.setState({loading: true});
    this.props.getPackages(this.props.tokenInfo.token);
  }

  componentWillReceiveProps(nextProps) {
    const {packageInfo} = nextProps;
    if (packageInfo) {
      this.setState({loading: false});;
    }
  }

  onItemSelect(rowData, rowID) {
    Actions.PackageDetail({data: rowData});
  }

  _renderRow (rowData, sectionID, rowID, highlightRow) {
    console.log('PACKAGE_INFO', rowData);
    return (
      <TouchableOpacity 
        activeOpacity={0.6}
        onPress={()=>{this.onItemSelect(rowData)}}
      >
        <View style={styles.listItem}>
          <View style={styles.imageView}>
            <View style={[styles.roundContent, {backgroundColor: this.state.colorData[rowID]}]}>
                <Text style={styles.number}>{rowData.detail['1'].title}</Text>
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
  _renderSeparator (sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
          key={`${sectionID}-${rowID}`}
          style={{ height: 15, backgroundColor: 'transparent', flex:1}}
      />
    );
  }

  render() {
    const {packageInfo} = this.props;
    let dataSource;
    
    if (packageInfo) {
      let listData = packageInfo.package;
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      dataSource = ds.cloneWithRows(listData);
    }

    return (
      <Container title={I18n.t('sidebar.packages')}>
        <LoadingSpinner visible={this.state.loading } />
        <View style={styles.container}>
          {packageInfo && (
          <ListView
              ref='listview'
              dataSource={dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator={this._renderSeparator}
              contentContainerStyle={styles.listView}
            />)}
        </View>
      </Container>
    );
  }
}

export default connect(state => ({
  tokenInfo: state.token.tokenInfo,
  packageInfo: state.packages.packageInfo
}),{ getPackages })(PackagePage);