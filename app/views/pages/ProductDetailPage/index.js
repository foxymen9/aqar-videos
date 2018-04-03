import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  ListView,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import FontAwesome, {Icons} from 'react-native-fontawesome';
import Icon from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';

import I18n from '@i18n';
import Container from '@layout/Container';
import { styles } from './styles';
import ModalShare from '@components/ModalShare';

const icon_office = require('@common/assets/images/product_detail/office.png');
const icon_report = require('@common/assets/images/product_detail/report_ad.png');

export default class ProductDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showShareModal: false,
      favorite: false,
    }
  }

  onFavorite() {
    this.setState({ favorite: !this.state.favorite })
  }

  onShare() {
    this.setState({showShareModal : true});
  }

  onSendMessage() {
    Actions.DirectMessage();
  }

  onReportAD() {

  }

  render() {
    const { data } = this.props;

    return (
      <Container title={data.title} type='detail'>
        <View style={styles.container}>
          <ScrollView>
            <Image source={{ uri: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg'}} style={ styles.thumbnail } />    
            <View style={styles.titleView}>
              <Text style={styles.textTitle}>
                Office in the city center for rent
              </Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.textDescription}>he following * Begin with the words **ROR Engineer** * Include links to your Github, Stack Overflow and Linked In profiles * Include a link to your blog (if you have one)</Text>
            </View>
            <View style={styles.titleView}>
              <Text style={styles.textPhone}>
                + 123 567 45 45 90
              </Text>
            </View>
            <View style={styles.separate} />
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                5.000 SAR
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textDescription}>
                Ar Riyadh
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textDescription}>
                Riyadg
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textDescription}>
                North - East
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                Rent
              </Text>
            </View>
            <View style={styles.titleView}>
              <Image source={icon_office} style={styles.iconOffice} resizeMode="cover" />
              <Text style={styles.textDescription}>
                Office
              </Text>
            </View>
            <View style={styles.btnView}>
              <TouchableOpacity onPress={()=>this.onFavorite()} activeOpacity={0.5}>
                <View style={styles.btnFavorite}>
                  <FontAwesome style={ this.state.favorite ? styles.icon_select : styles.icon }>{Icons.star}</FontAwesome>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onShare()} activeOpacity={0.5}>
                <View style={styles.btnShare}>
                  <IconEntypo name='share' style={styles.icon}></IconEntypo>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.onSendMessage()} activeOpacity={0.5}>
                <View style={styles.btnSend}>
                  <View style={styles.sendTextWrapper}>
                    <Text style={styles.textSend}>{I18n.t('send')}</Text>
                    <Text style={styles.textSend}>{I18n.t('message')}</Text>
                  </View>
                  <FontAwesome style={styles.icon}>{Icons.envelopeO}</FontAwesome>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.btnView}>
              <TouchableOpacity onPress={()=>this.onReportAD()} activeOpacity={0.5}>
                <View style={styles.btnAd}>
                  <Text style={[styles.textDescription, {fontStyle: 'italic'}]}>{I18n.t('report_ad')}</Text>
                  {/* <Icon name='flag' style={styles.iconAd} /> */}
                  <Image source={icon_report} style={styles.iconAd} />
                </View>
              </TouchableOpacity>
            </View>
            <ModalShare showShareModal={this.state.showShareModal} hideShareModal={()=>this.setState({showShareModal: false})} />
          </ScrollView>
        </View>
      </Container>
    );
  }
}