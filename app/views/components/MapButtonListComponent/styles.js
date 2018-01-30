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
    bottom: 250,
  },
  btnIcon: {
    width: 75,
    height: 75,
  }
});