import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

const titlePadding = 15;

export const styles = StyleSheet.create({
  container: {
    height: commonStyles.menuHeight,
    width: commonStyles.screenWidth,
    backgroundColor: commonColors.pinkColor,
    paddingTop: titlePadding,
    borderBottomWidth: 2,
    borderColor: 'rgba(179, 33, 118, 0.5)',
  },
  container_register: {
    height: commonStyles.menuHeight,
    width: commonStyles.screenWidth,
    backgroundColor: 'white',
    paddingTop: titlePadding,
    borderColor: 'rgba(179, 33, 118, 0.5)',
  },
  container_detail: {
    height: commonStyles.menuHeight,
    width: commonStyles.screenWidth,
    backgroundColor: commonColors.pinkColor,
    paddingTop: titlePadding,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(179, 33, 118, 0.5)',
  },
  subContainer:{
    height: commonStyles.menuHeight - 15,
    paddingHorizontal: commonStyles.padding,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuTitle: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  menuTitle_support: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  menuItemIcon: {
    width: 20,
    height: 20,
  },
  backIcon: {
    fontSize: 25,
    fontWeight: 'bold',
    color: commonColors.darkGrayColor,
  },
  backIconWrapper: {
    position: 'absolute',
    left: commonStyles.padding,
    width: 40,
    top: 25,
  },
  backIcon_detail: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
});