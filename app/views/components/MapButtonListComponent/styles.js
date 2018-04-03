import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: commonStyles.screenSubHeight,
    width: commonStyles.screenWidth,
  },
  btn: {
    position: 'absolute',
    right: 2,
    zIndex: 99,
  },
  btnView: {
    bottom: 240,
  },
  btnViewList: {
    bottom: 70,
  },
  btnIcon: {
    width: 73,
    height: 73,
  },
  badgeView: {
    position: 'absolute',
    right: 5,
    top: 0,
    width: 25,
    height: 25,
    backgroundColor: commonColors.pinkColor,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    backgroundColor: 'transparent',
  }
});