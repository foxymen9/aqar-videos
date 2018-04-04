const React = require('react');
const { ViewPropTypes } = ReactNative = require('react-native');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const {
  View,
  Animated,
  StyleSheet,
  ScrollView,
  Text,
  Platform,
  Dimensions,
  Image,
} = ReactNative;
const Button = require('./Button');

const WINDOW_WIDTH = Dimensions.get('window').width;

const icon_building = require('@common/assets/images/tab/building.png');
const icon_villa = require('@common/assets/images/tab/villa.png');
const icon_apartment = require('@common/assets/images/tab/apartment.png');
const icon_office = require('@common/assets/images/tab/office.png');
const icon_chalet = require('@common/assets/images/tab/chalet.png');
const icon_apartment_owner = require('@common/assets/images/tab/apartment_owner.png');
const icon_factory = require('@common/assets/images/tab/factory.png');
const icon_firms = require('@common/assets/images/tab/firms.png');
const icon_office_for_sale = require('@common/assets/images/tab/office_for_sale.png');
const icon_stores = require('@common/assets/images/tab/stores.png');
const icon_gallery = require('@common/assets/images/tab/gallery.png');
const icon_land = require('@common/assets/images/tab/land.png');
const icon_esteraha = require('@common/assets/images/tab/land.png');

import * as commonStyles from '@common/styles/commonStyles';

const icons = [
  icon_gallery,
  icon_stores,
  icon_factory,
  icon_office_for_sale,
  icon_firms,
  icon_esteraha,
  icon_chalet,
  icon_apartment_owner,
  icon_office,
  icon_land,
  icon_apartment,
  icon_villa,
  icon_building,
]

let _isStart = true
let _isArabic = true

const ScrollableTabBar = createReactClass({
  propTypes: {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    scrollOffset: PropTypes.number,
    style: ViewPropTypes.style,
    tabStyle: ViewPropTypes.style,
    tabsContainerStyle: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: ViewPropTypes.style,
    onScroll: PropTypes.func,
  },

  getDefaultProps() {
    return {
      scrollOffset: 52,
      activeTextColor: '#EB0089',
      inactiveTextColor: 'black',
      backgroundColor: null,
      style: {},
      tabStyle: {},
      tabsContainerStyle: {},
      underlineStyle: {},
    };
  },

  getInitialState() {
    _isStart = true;
    this._tabsMeasurements = [];
    if (_isArabic) {
      return {
        _leftTabUnderline: new Animated.Value(1150),
        _widthTabUnderline: new Animated.Value(100),
        _containerWidth: null,
      };
    } else {
      return {
        _leftTabUnderline: new Animated.Value(10),
        _widthTabUnderline: new Animated.Value(100),
        _containerWidth: null,
      };
    }
  },

  componentDidMount() {
    this.props.scrollValue.addListener(this.updateView);
  },

  componentWillUnmount() {
    _isStart = true;
  },

  updateView(offset) {
    if (_isArabic) {
      if (_isStart) {
        this._scrollView.scrollToEnd()
      }
    }

    const position = Math.floor(offset.value);
    const pageOffset = offset.value % 1;
    const tabCount = this.props.tabs.length;
    const lastTabPosition = tabCount - 1;

    if (offset.value == undefined) {
      offset.value = 0;
    }

    if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
      return;
    }

    if (this.necessarilyMeasurementsCompleted(position, position === lastTabPosition)) {
      this.updateTabPanel(position, pageOffset);
      this.updateTabUnderline(position, pageOffset, tabCount);
    }
  },

  necessarilyMeasurementsCompleted(position, isLastTab) {
    return this._tabsMeasurements[position] &&
      (isLastTab || this._tabsMeasurements[position + 1]) &&
      this._tabContainerMeasurements &&
      this._containerMeasurements;
  },

  updateTabPanel(position, pageOffset) {
    const containerWidth = this._containerMeasurements.width;
    const tabWidth = this._tabsMeasurements[position].width;
    const nextTabMeasurements = this._tabsMeasurements[position + 1];
    const nextTabWidth = nextTabMeasurements && nextTabMeasurements.width || 0;
    const tabOffset = this._tabsMeasurements[position].left;
    const absolutePageOffset = pageOffset * tabWidth;
    let newScrollX = tabOffset + absolutePageOffset;

    // center tab and smooth tab change (for when tabWidth changes a lot between two tabs)
    newScrollX -= (containerWidth - (1 - pageOffset) * tabWidth - pageOffset * nextTabWidth) / 2;
    newScrollX = newScrollX >= 0 ? newScrollX : 0;

    if (Platform.OS === 'android') {
      this._scrollView.scrollTo({x: newScrollX, y: 0, animated: false, });
    } else {
      const rightBoundScroll = this._tabContainerMeasurements.width - (this._containerMeasurements.width);
      newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX;
      this._scrollView.scrollTo({x: newScrollX, y: 0, animated: false, });
    }

  },

  updateTabUnderline(position, pageOffset, tabCount) {
    const lineLeft = this._tabsMeasurements[position].left;
    const lineRight = this._tabsMeasurements[position].right;

    if (position < tabCount - 1) {
      const nextTabLeft = this._tabsMeasurements[position + 1].left;
      const nextTabRight = this._tabsMeasurements[position + 1].right;

      const newLineLeft = (pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft);
      const newLineRight = (pageOffset * nextTabRight + (1 - pageOffset) * lineRight);

      this.state._leftTabUnderline.setValue(newLineLeft);
      this.state._widthTabUnderline.setValue(newLineRight - newLineLeft);
    } else {
      this.state._leftTabUnderline.setValue(lineLeft);
      this.state._widthTabUnderline.setValue(lineRight - lineLeft);
    }
  },

  renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
    const { activeTextColor, inactiveTextColor, textStyle, } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';

    return <Button
      key={`${name}_${page}`}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => {_isStart = false, onPressHandler(page)}}
      onLayout={onLayoutHandler}
    >
      <View style={[styles.tab, this.props.tabStyle ]}>
        <Text style={[{color: textColor, fontWeight, fontSize: 18, fontFamily: commonStyles.normalFont}, textStyle]}>
          {name}
        </Text>
        <Image source={icons[page]} style={styles.tabItemIcon} />
      </View>
    </Button>;
  },

  measureTab(page, event) {
    const { x, width, height, } = event.nativeEvent.layout;
    this._tabsMeasurements[page] = {left: x, right: x + width, width, height, };
    this.updateView({value: this.props.scrollValue._value, });
  },

  render() {
    const tabUnderlineStyle = {
      position: 'absolute',
      height: 4,
      backgroundColor: '#EB0089',
      bottom: 0,
    };

    let dynamicTabUnderline = {}

    if (_isArabic) {
      if (_isStart) {
        dynamicTabUnderline = {
          right: 10,
          width: this.state._widthTabUnderline,
        };
      } else {
        dynamicTabUnderline = {
          left: this.state._leftTabUnderline,
          width: this.state._widthTabUnderline,
        };
      }
    } else {
      dynamicTabUnderline = {
        left: this.state._leftTabUnderline,
        width: this.state._widthTabUnderline,
      };
    }

    return <View
      style={[styles.container, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}
      onLayout={this.onContainerLayout}
    >
      <ScrollView
        ref={(scrollView) => { this._scrollView = scrollView; }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
        bounces={false}
        scrollsToTop={false}
      >
        <View
          style={[styles.tabs, {width: this.state._containerWidth, }, this.props.tabsContainerStyle, ]}
          ref={'tabContainer'}
          onLayout={this.onTabContainerLayout}
        >
          {this.props.tabs.map((name, page) => {
            const isTabActive = this.props.activeTab === page;
            const renderTab = this.props.renderTab || this.renderTab;
            return renderTab(name, page, isTabActive, this.props.goToPage, this.measureTab.bind(this, page));
          })}
          <Animated.View style={[tabUnderlineStyle, dynamicTabUnderline, this.props.underlineStyle, ]} />
        </View>
      </ScrollView>
    </View>;
  },

  componentWillReceiveProps(nextProps) {
    // If the tabs change, force the width of the tabs container to be recalculated
    if (JSON.stringify(this.props.tabs) !== JSON.stringify(nextProps.tabs) && this.state._containerWidth) {
      this.setState({ _containerWidth: null, });
    }
  },

  onTabContainerLayout(e) {
    this._tabContainerMeasurements = e.nativeEvent.layout;
    let width = this._tabContainerMeasurements.width;
    if (width < WINDOW_WIDTH) {
      width = WINDOW_WIDTH;
    }
    this.setState({ _containerWidth: width, });
    this.updateView({value: this.props.scrollValue._value, });
  },

  onContainerLayout(e) {
    this._containerMeasurements = e.nativeEvent.layout;
    this.updateView({value: this.props.scrollValue._value, });
  },
});

module.exports = ScrollableTabBar;

const styles = StyleSheet.create({
  tab: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: commonStyles.padding/2,
    paddingRight: commonStyles.padding/2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    height: commonStyles.tabBarHieght,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    shadowOffset: { width:0, height:2 },
    shadowOpacity: 0.4,
    shadowColor: 'black',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: commonStyles.padding/2,
  },
  tabItemIcon: {
    width: 18,
    height: 18,
    marginLeft: commonStyles.padding/2,
  }
});