import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: commonStyles.menuHeight,
    backgroundColor: '#fff',
    borderLeftWidth: 1,
    borderColor: '#f2f2f2',
  },
  menuItem: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    paddingHorizontal: commonStyles.padding,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  menuItemTitle: {
    fontSize: commonStyles.normalFontSize,
    color: '#868686',
  },
  menuItemIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
  },
});