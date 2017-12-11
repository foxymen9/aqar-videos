import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: commonStyles.screenSubHeight,
    width: commonStyles.screenWidth
  },
  btn: {
    position: 'absolute',
    right: 15,
    zIndex: 99,
  },
  btnView: {
    bottom: 120,
  },
  btnIcon: {
    width: 80,
    height: 80,
  }
});