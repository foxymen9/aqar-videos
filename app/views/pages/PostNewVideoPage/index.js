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

const icon_building = require('../../../common/assets/images/product_detail/building.png');
const icon_building_select = require('../../../common/assets/images/product_detail/building2.png');
const icon_flat = require('../../../common/assets/images/product_detail/flat.png');
const icon_flat_select = require('../../../common/assets/images/product_detail/flat2.png');
const icon_office = require('../../../common/assets/images/product_detail/office2.png');
const icon_office_select = require('../../../common/assets/images/product_detail/office.png');
const icon_room = require('../../../common/assets/images/product_detail/room.png');
const icon_room_select = require('../../../common/assets/images/product_detail/room2.png');
const icon_shop = require('../../../common/assets/images/product_detail/shop.png');
const icon_shop_select = require('../../../common/assets/images/product_detail/shop2.png');

export default class PostNewVideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'building',
    }
  }

  onSelectCategory(item) {
    this.setState({category: item});
  }

  onPreview() {

  }

  render() {
    const {category} = this.state;
    return (
      <Container title='POST A NEW AD'>
        <View style={styles.container}>
          <ScrollView>
            <Image source={{ uri: 'https://ar.rdcpix.com/1310744609/3d220b868bac74f582f666970f984894c-f0xd-w1020_h770_q80.jpg'}} style={ styles.thumbnail } />    
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                Title
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                Description
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                Price
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                Region
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                City
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                District
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.textTitle}>
                Product Option
              </Text>
            </View>
            <View style={styles.titleView}>
              <Text style={styles.textTitle}>
                Category
              </Text>
            </View>
            <ScrollView style={styles.categoryScrollView} 
              horizontal={true}
              alwaysBounceHorizontal={false}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.categoryView}>
                <TouchableOpacity onPress={()=>this.onSelectCategory('building')} activeOpacity={0.5}>
                  <View style={[styles.btnCategory, category=='building' && styles.categoryBack]}>
                    {category == 'building'
                      ? <Image source={icon_building_select} style={styles.icon} />
                      : <Image source={icon_building} style={styles.icon} />
                    }
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onSelectCategory('flat')} activeOpacity={0.5}>
                  <View style={[styles.btnCategory, category=='flat' && styles.categoryBack]}>
                    {category == 'flat'
                      ? <Image source={icon_flat_select} style={styles.icon} />
                      : <Image source={icon_flat} style={styles.icon} />
                    }
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onSelectCategory('office')} activeOpacity={0.5}>
                  <View style={[styles.btnCategory, category=='office' && styles.categoryBack]}>
                    {category == 'office'
                      ? <Image source={icon_office_select} style={styles.icon} />
                      : <Image source={icon_office} style={styles.icon} />
                    }
                  </View> 
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onSelectCategory('room')} activeOpacity={0.5}>
                  <View style={[styles.btnCategory, category=='room' && styles.categoryBack]}>
                    {category == 'room'
                      ? <Image source={icon_room_select} style={styles.icon} />
                      : <Image source={icon_room} style={styles.icon} />
                    }
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onSelectCategory('shop')} activeOpacity={0.5}>
                  <View style={[styles.btnCategory, category=='shop' && styles.categoryBack]}>
                    {category == 'shop'
                      ? <Image source={icon_shop_select} style={styles.icon} />
                      : <Image source={icon_shop} style={styles.icon} />
                    }
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <TouchableOpacity onPress={()=>this.onPreview()} activeOpacity={0.5}>
              <View style={styles.previewBtnView}>
                <Text style={styles.textPreview}>Preview</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Container>
    );
  }
}