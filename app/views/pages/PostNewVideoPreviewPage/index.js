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

import FontAwesome, {Icons} from 'react-native-fontawesome';
import Icon from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';

import Container from '../../layout/Container';
import { styles } from './styles';
import ModalShare from '../../components/ModalShare';

const icon_office = require('../../../common/assets/images/product_detail/office2.png');
const icon_report = require('../../../common/assets/images/product_detail/report_ad.png');

export default class PostNewVideoPreviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showShareModal: false,
    }
  }

  onEdit() {

  }

  OnPost() {
    
  }

  render() {

    return (
      <Container title='PREVIEW'>
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
            <TouchableOpacity onPress={()=>this.onEdit()} activeOpacity={0.5}>
              <View style={styles.editBtnView}>
                <Text style={styles.textEdit}>EDIT</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.onPost()} activeOpacity={0.5}>
              <View style={styles.postBtnView}>
                <Text style={styles.textEdit}>POST</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Container>
    );
  }
}