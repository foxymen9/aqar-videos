import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

export const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    right: 15,
    zIndex: 99,
  },
  btnPlus: {
    bottom: 40,
  },
  btnIcon: {
    width: 80,
    height: 80,
  }
});