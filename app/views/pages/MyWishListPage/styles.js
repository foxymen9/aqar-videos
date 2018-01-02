import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

const listItemWidth = commonStyles.screenSubWidth;
const listItemHeight = 100;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: commonStyles.screenNormalHeight,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  listView: {
    paddingHorizontal: commonStyles.padding,
    paddingTop: 15,
  },
  listItem: {
    width: listItemWidth,
    height: listItemHeight,
    flexDirection: 'row',
    shadowOffset: { width:0, height:2 },
    shadowOpacity: 0.4,
    shadowColor: 'black',
  },
  imageView: {
    width: 120,
    height: listItemHeight,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  footerView: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  textTitle: {
    fontFamily: commonStyles.normalFont,
    color: commonColors.darkGrayColor,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  textPrice: {
    fontFamily: commonStyles.normalFont,
    color: commonColors.darkGrayColor,
    fontSize: 14,
    textAlign: 'right',
  },
  viewWrapper: {
    flexDirection: 'row',
  },
  textViewCount: {
    fontFamily: commonStyles.normalFont,
    color: commonColors.darkGrayColor,
    fontSize: 11,
    fontStyle: 'italic',
    textAlign: 'right',
  },
  eye: {
    fontSize: 14,
    color: commonColors.darkGrayColor,
    marginLeft: 5,
  }
});