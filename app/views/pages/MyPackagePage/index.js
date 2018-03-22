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
import PercentageCircle from 'react-native-percentage-circle';

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

  onRenew() {
    // Actions.MyPackageDetail({data: rowData});
  }

  render() {   
    let currentPackage = {
      package_id: '1',
      detail: 
      {
        'title': 'test 1',
        'description': 'description',
        'start_date': '2018-3-10',
        'end_date': '2018-3-31',
      },
      price: '$100.00',
      duration: '11'
    }

    return (
      <Container title={I18n.t('sidebar.my_packages')}>
        <LoadingSpinner visible={this.state.loading } />
        <View style={styles.container}>
          <View style={styles.packageView}>
            <View style={styles.titleView}>
              <Text style={styles.title}>{currentPackage.detail.title}</Text>
              <Text style={styles.description}>{currentPackage.detail.description}</Text>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity onPress={() => this.onRenew()}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Renew Now</Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.expiredText}>Expire on: 31 April 2018</Text>
            </View>
          </View>
          <View style={styles.chartView}>
            <View>
              <PercentageCircle radius={40} percent={50} color={'#e6b800'} borderWidth={3}>
                <Text style={styles.circleTitle}>Days</Text>
                <Text style={styles.circleSubTitle}>49</Text>
              </PercentageCircle>
            </View>
            <View>
              <PercentageCircle radius={40} percent={50} color={'#3498db'} borderWidth={3}>
                <Text style={styles.circleTitle}>HOURS</Text>
                <Text style={styles.circleSubTitle}>23</Text>
              </PercentageCircle>
            </View>
            <View>
              <PercentageCircle radius={40} percent={50} color={'#02bf1c'} borderWidth={3}>
                <Text style={styles.circleTitle}>MINUTES</Text>
                <Text style={styles.circleSubTitle}>43</Text>
              </PercentageCircle>
            </View>
            <View>
              <PercentageCircle radius={40} percent={50} color={'#05c1aa'} borderWidth={3}>
                <Text style={styles.circleTitle}>SECONDS</Text>
                <Text style={styles.circleSubTitle}>22</Text>
              </PercentageCircle>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default MyPackagePage;
