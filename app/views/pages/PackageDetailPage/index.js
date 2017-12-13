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

const icon_close = require('../../../common/assets/images/product_detail/close.png');

export default class PackageDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSuccess: false,
    }
  }

  onTry() {
    this.setState({isSuccess : true});
  }

  render() {
    const {data} = this.props;

    if (this.state.isSuccess) {
      return (
        <Container title={data.number + ' DAYS'} type='detail'>
          <View style={styles.container}>
            <View style={styles.successTextWrapper}>
              <Text style={styles.textSuccess}>CONGRATULATIONS YOU HAVE SUCCESSFULLY UPDATED YOUR <Text style={[styles.textSuccess, styles.bold]}>{data.number + ' DAYS FREE'}</Text> TRIAL VERSION</Text>
            </View>
            <Image source={icon_close} style={styles.imgClose} />
          </View>
        </Container>
      )
    }

    return (
      <Container title={data.number + ' DAYS'} type='detail'>
        <View style={styles.container}>
          <Image source={{ uri: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg'}} style={ styles.thumbnail } />    
          <View style={styles.description}>
            <ScrollView style={styles.descriptionScrollView}>
              <Text style={styles.textDescription}>We are hiring a Senior Full Stack Ruby on Rails engineer toWe are hiring a Senior Full Stack Ruby on Rails engineer to work on a product that helps our customers manage brick and mortar businesses, with various evaluation and assignment tools Our code is a Rails with some Javascript, we're also adopting React components. D3 is used for visualization, and mobile apps for iOS and android in the progress. The app runs on rails 5.1 on AWS uses bootstrap 3 for frontend. For testing we using rspec with 80% code coverage. Responsibilities: - refactor/rearchitect code to allow for efficient implentation of new features/requirements. - implementation of new features/requirements - bugfixing, troubleshooting and post mortem analysis - improve deployment infrastructure and setup - improve our software development life cycle tools and processes Required skills: Strong ruby, rails and SQL is a requirement. Knowledge of React, D3, AWS is a plus. Please Note: In your cover letter include the following * Begin with the words **ROR Engineer** * Include links to your Github, Stack Overflow and Linked In profiles * Include a link to your blog (if you have one)</Text>
            </ScrollView>
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity onPress={()=>this.onTry()} activeOpacity={0.5}>
              <View style={styles.btnWrapper}>
                <Text style={styles.btnText}>TRY</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}