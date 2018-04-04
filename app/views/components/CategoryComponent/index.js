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
const icon_building_select = require('@common/assets/images/product_detail/building1.png');
const icon_villa = require('@common/assets/images/product_detail/villa.png');
const icon_villa_select = require('@common/assets/images/product_detail/villa1.png');
const icon_apartment = require('@common/assets/images/product_detail/apartment.png');
const icon_apartment_select = require('@common/assets/images/product_detail/apartment1.png');
const icon_office = require('@common/assets/images/product_detail/office.png');
const icon_office_select = require('@common/assets/images/product_detail/office1.png');
const icon_chalet = require('@common/assets/images/product_detail/chalet.png');
const icon_chalet_select = require('@common/assets/images/product_detail/chalet1.png');
const icon_apartment_owner = require('@common/assets/images/product_detail/apartment_owner.png');
const icon_apartment_owner_select = require('@common/assets/images/product_detail/apartment_owner1.png');
const icon_factory = require('@common/assets/images/product_detail/factory.png');
const icon_factory_select = require('@common/assets/images/product_detail/factory1.png');
const icon_firms = require('@common/assets/images/product_detail/firms.png');
const icon_firms_select = require('@common/assets/images/product_detail/firms1.png');
const icon_office_for_sale = require('@common/assets/images/product_detail/office_for_sale.png');
const icon_office_for_sale_select = require('@common/assets/images/product_detail/office_for_sale1.png');
const icon_store = require('@common/assets/images/product_detail/stores.png');
const icon_store_select = require('@common/assets/images/product_detail/stores1.png');
const icon_gallery = require('@common/assets/images/product_detail/gallery.png');
const icon_gallery_select = require('@common/assets/images/product_detail/gallery1.png');
const icon_land = require('@common/assets/images/product_detail/land.png');
const icon_land_select = require('@common/assets/images/product_detail/land1.png');

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
        onContentSizeChange={(width, height) => this.refs.catoryScroll.scrollTo({x: width - commonStyles.screenWidth})}
      >
        <View style={styles.categoryView}>

          <TouchableOpacity onPress={()=>this.onSelectCategory('gallery', 4)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='gallery' && styles.categoryBack]}>
              {category == 'gallery'
                ? <Image source={icon_gallery_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_gallery} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'gallery' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.gallery')}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.onSelectCategory('store', 6)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='store' && styles.categoryBack]}>
              {category == 'store'
                ? <Image source={icon_store_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_store} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'store' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.stores')}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.onSelectCategory('factory', 6)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='factory' && styles.categoryBack]}>
              {category == 'factory'
                ? <Image source={icon_factory_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_factory} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'factory' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.factory')}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.onSelectCategory('office_for_sale', 6)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='office_for_sale' && styles.categoryBack]}>
              {category == 'office_for_sale'
                ? <Image source={icon_office_for_sale_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_office_for_sale} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'office_for_sale' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.office_for_sale')}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.onSelectCategory('firms', 6)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='firms' && styles.categoryBack]}>
              {category == 'firms'
                ? <Image source={icon_firms_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_firms} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'firms' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.firms')}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.onSelectCategory('chalet', 3)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='chalet' && styles.categoryBack]}>
              {category == 'chalet'
                ? <Image source={icon_chalet_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_chalet} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'chalet' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.chalet')}</Text>
            </View> 
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.onSelectCategory('apartment_owner', 6)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='apartment_owner' && styles.categoryBack]}>
              {category == 'apartment_owner'
                ? <Image source={icon_apartment_owner_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_apartment_owner} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'apartment_owner' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.apartment_owner')}</Text>
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

          <TouchableOpacity onPress={()=>this.onSelectCategory('land', 5)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='land' && styles.categoryBack]}>
              {category == 'land'
                ? <Image source={icon_land_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_land} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'land' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.land')}</Text>
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

          <TouchableOpacity onPress={()=>this.onSelectCategory('villa', 1)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='villa' && styles.categoryBack]}>
              {category == 'villa'
                ? <Image source={icon_villa_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_villa} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'villa' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.villa')}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.onSelectCategory('building', 0)} activeOpacity={0.5}>
            <View style={[styles.btnCategory, category=='building' && styles.categoryBack]}>
              {category == 'building'
                ? <Image source={icon_building_select} style={styles.icon} resizeMode='contain' />
                : <Image source={icon_building} style={styles.icon} resizeMode='contain' />
              }
              <Text style={category == 'building' ? styles.textCategorySelect : styles.textCategory}>{I18n.t('category.building')}</Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    )
  }
}
