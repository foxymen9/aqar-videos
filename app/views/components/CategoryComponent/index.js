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
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';

import I18n from '@i18n';

import { styles } from './styles';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';

const icon_building = require('@common/assets/images/product_detail/building.png');
const icon_building_select = require('@common/assets/images/product_detail/building2.png');
const icon_villa = require('@common/assets/images/product_detail/villa2.png');
const icon_villa_select = require('@common/assets/images/product_detail/villa.png');
const icon_apartment = require('@common/assets/images/product_detail/flat.png');
const icon_apartment_select = require('@common/assets/images/product_detail/flat2.png');
const icon_office = require('@common/assets/images/product_detail/office2.png');
const icon_office_select = require('@common/assets/images/product_detail/office.png');
const icon_gallery = require('@common/assets/images/product_detail/shop.png');
const icon_gallery_select = require('@common/assets/images/product_detail/shop2.png');
const icon_land = require('@common/assets/images/product_detail/area2.png');
const icon_land_select = require('@common/assets/images/product_detail/area.png');
const icon_chalet = require('@common/assets/images/product_detail/chalet2.png');
const icon_chalet_select = require('@common/assets/images/product_detail/chalet.png');
const icon_real_estate = require('@common/assets/images/product_detail/realestate2.png');
const icon_real_estate_select = require('@common/assets/images/product_detail/realestate.png');

export default class CategoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'building',
    }
  }

  onSelectCategory(item, index) {
    this.setState({category: item});
    this.props.category(item);

    // if (index == 6 || index == 3) {
    //   this.refs.catoryScroll.scrollToEnd();
    // }
    // if (index == 0 || index == 4) {
    //   this.refs.catoryScroll.scrollTo({x: 0, y: 0, animated: true});
    // }
  }

  render() {
    const { category } = this.state;
    return (
      <ScrollView 
        ref='catoryScroll'
        style={styles.categoryScrollView} 
        horizontal={true}
        alwaysBounceHorizontal={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.categoryView}>
          <TouchableOpacity onPress={()=>this.onSelectCategory('building', 0)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='building' && styles.categoryBack]}>
              {category == 'building'
                ? <Image source={icon_building_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_building} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'building' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.building')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.onSelectCategory('villa', 1)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='villa' && styles.categoryBack]}>
              {category == 'villa'
                ? <Image source={icon_villa_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_villa} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'villa' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.villa')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.onSelectCategory('apartment', 2)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='apartment' && styles.categoryBack]}>
              {category == 'apartment'
                ? <Image source={icon_apartment_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_apartment} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'apartment' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.apartment')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.onSelectCategory('office', 3)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='office' && styles.categoryBack]}>
              {category == 'office'
                ? <Image source={icon_office_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_office} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'office' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.office')}</Text>
            </View> 
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.onSelectCategory('gallery', 4)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='gallery' && styles.categoryBack]}>
              {category == 'gallery'
                ? <Image source={icon_gallery_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_gallery} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'gallery' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.gallery')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.onSelectCategory('land', 5)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='land' && styles.categoryBack]}>
              {category == 'land'
                ? <Image source={icon_land_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_land} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'land' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.land')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.onSelectCategory('chalet', 6)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='chalet' && styles.categoryBack]}>
              {category == 'chalet'
                ? <Image source={icon_chalet_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_chalet} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'chalet' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.chalet')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.onSelectCategory('real_estate', 7)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='real_estate' && styles.categoryBack]}>
              {category == 'real_estate'
                ? <Image source={icon_real_estate_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_real_estate} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'real_estate' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.real_estate')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}