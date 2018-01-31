import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  ListView,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';

import I18n from '@i18n';
import Container from '@layout/Container';
import { styles } from './styles';

const icon_close = require('@common/assets/images/product_detail/close.png');
const img_detail = require('@common/assets/images/my_message/picture.png');

export default class PackageDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSuccess: false,
      refreshing: false,
      isSubscribed: true,
    }
  }

  onTry() {
    this.setState({isSuccess : true});
  }

  onRefresh() {
    this.setState({ refreshing: false });
  }

  render() {
    const {data} = this.props;

    const refreshControl = (
      <RefreshControl onRefresh={()=>this.onRefresh()} refreshing={this.state.refreshing} />
    );

    if (this.state.isSuccess) {
      return (
        <Container title={data.number + I18n.t('packages.days')} type='detail'>
          <View style={styles.container}>
            <View style={styles.successTextWrapper}>
              <Text style={styles.textSuccess}>{I18n.t(packages.congratulation)} <Text style={[styles.textSuccess, styles.bold]}>{data.number + I18n.t('packages.days_free')}</Text> {I18n.t('packages.trial_version')}</Text>
            </View>
            <Image source={icon_close} style={styles.imgClose} />
          </View>
        </Container>
      )
    }

    let titleDesc = data.title;
    if (titleDesc == I18n.t('packages.trial')) {
      titleDesc = I18n.t('packages.free_trial');
    }

    return (
      <Container title={data.number + I18n.t('packages.days')} type='detail'>
        <View style={styles.container}>
          <View style={styles.thumbnailView}>
            <Image source={img_detail} style={ styles.thumbnail } />    
            <View style={styles.titleView}>
              {this.state.isSubscribed && (
                <Text style={styles.remainDay}>20 DAYS is left</Text>
              )}
              <Text style={styles.titleDay}>{data.number} {I18n.t('packages.days')}</Text>
              <Text style={styles.titleDesc}>{titleDesc}</Text>
            </View>
          </View>
          <View style={styles.description}>
            <ScrollView style={styles.descriptionScrollView} refreshControl={refreshControl}>
              <Text style={styles.textDescription}>We are hiring a Senior Full Stack Ruby on Rails engineer toWe are hiring a Senior Full Stack Ruby on Rails engineer to work on a product that helps our customers manage brick and mortar businesses, with various evaluation and assignment tools Our code is a Rails with some Javascript, we're also adopting React components. D3 is used for visualization, and mobile apps for iOS and android in the progress. The app runs on rails 5.1 on AWS uses bootstrap 3 for frontend. For testing we using rspec with 80% code coverage. Responsibilities: - refactor/rearchitect code to allow for efficient implentation of new features/requirements. - implementation of new features/requirements - bugfixing, troubleshooting and post mortem analysis - improve deployment infrastructure and setup - improve our software development life cycle tools and processes Required skills: Strong ruby, rails and SQL is a requirement. Knowledge of React, D3, AWS is a plus. Please Note: In your cover letter include the following * Begin with the words **ROR Engineer** * Include links to your Github, Stack Overflow and Linked In profiles * Include a link to your blog (if you have one)</Text>
            </ScrollView>
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity onPress={()=>this.onTry()} activeOpacity={0.5}>
              <View style={styles.btnWrapper}>
                <Text style={styles.btnText}>{this.state.isSubscribed ? I18n.t('packages.extend') : I18n.t('packages.try')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}