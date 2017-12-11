import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

const listItemWidth = (commonStyles.screenWidth - commonStyles.padding * 2 - 10) / 2;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: commonStyles.screenHeight - commonStyles.tabBarHieght,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  listView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 15,
    paddingHorizontal: commonStyles.padding - 5,
  },
  listItem: {
    width: listItemWidth,
    marginHorizontal: 5,
    height: listItemWidth + 10,
    marginBottom: 10,
  },
  imageView: {
    width: '100%',
    height: listItemWidth - 40,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  footerView: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  textTitle: {
    color: commonColors.darkGrayColor,
    fontSize: 12,
    fontWeight: 'bold',
  },
  textPrice: {
    color: commonColors.darkGrayColor,
    fontSize: 12,
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