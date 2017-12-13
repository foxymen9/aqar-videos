import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

export const styles = StyleSheet.create({
  dropDown: {
    width: '100%',
  },
  dropdownItemStyle: {
    textAlign: 'right',
  },
  dropdownPlaceholderView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dropdownPlaceholderText: {
    color: commonColors.placeholderText,
    fontSize: commonStyles.normalFontSize,
    textAlign: 'right'
  },
  arrowDown: {
    fontSize: 30,
    color: commonColors.placeholderText,
  }
});