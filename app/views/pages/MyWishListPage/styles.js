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
    height: commonStyles.screenHeight - commonStyles.tabBarHieght,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  listView: {
    paddingHorizontal: commonStyles.padding,
    paddingVertical: 15,
  },
  listItem: {
    width: listItemWidth,
    height: listItemHeight,
    flexDirection: 'row',
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
    color: commonColors.darkGrayColor,
    fontSize: 15,
    fontWeight: 'bold',
  },
  textPrice: {
    color: commonColors.darkGrayColor,
    fontSize: 14,
  },
  viewWrapper: {
    flexDirection: 'row',
  },
  textViewCount: {
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