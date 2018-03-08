import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';

const listItemHeight = 200;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listView: {
    paddingTop: 15,
    width: commonStyles.screenWidth,
    paddingHorizontal: commonStyles.padding,
  },
  listItem: {
    width: commonStyles.screenSubWidth,
    shadowOffset: { width:0, height:2 },
    shadowOpacity: 0.4,
    shadowColor: 'black',
  },
  imageView: {
    width: commonStyles.screenSubWidth,
    height: listItemHeight
  },
  image: {
    width: '100%',
    height: '100%',
  },
  subView: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  textPrice: {
    fontFamily: commonStyles.boldFont,
    fontSize: 13,
    color: commonColors.darkGrayColor,
  },
  footerView: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  footerRightView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  favorite: {
    fontSize: 30,
    color: commonColors.darkGrayColor,
  },
  textTitle: {
    fontFamily: commonStyles.boldFont,
    color: 'white',
    fontSize: 15,
  },
  viewWrapper: {
    flexDirection: 'row',
  },
  textViewCount: {
    fontFamily: commonStyles.normalFont,
    color: commonColors.darkGrayColor,
    fontSize: 11,
    fontStyle: 'italic',
  },
  eye: {
    fontSize: 14,
    color: commonColors.darkGrayColor,
    marginLeft: 5,
  }
});