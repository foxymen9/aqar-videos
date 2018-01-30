import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';

export const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    right: 2,
    zIndex: 99,
  },
  btnPlus: {
    bottom: 170,
  },
  btnIcon: {
    width: 75,
    height: 75,
  }
});