import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

export const styles = StyleSheet.create({
  container: {
    width: commonStyles.screenWidth,
    backgroundColor: '#FBFBFB',
    position: 'absolute',
    bottom: 0,
    height: 300,
    left: -commonStyles.padding,
    padding: commonStyles.padding,
  },
  modalHeader: {
    marginBottom: 30,
  },
  headerText: {
    fontSize: commonStyles.normalFontSize,
    color: commonColors.placeholderText,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  iconList: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconView: {
    width: '50%',
    alignItems: 'center',
  },
  iconFacebook: {
    color: '#3B589E',
    fontSize: 70,
    marginBottom: 10,
  },
  iconTwitter: {
    color: '#56CCF4',
    fontSize: 70,
    marginBottom: 10,
  },
  iconLinkedin: {
    color: '#007BB6',
    fontSize: 70,
    marginBottom: 10,
  },
  iconWhatsapp: {
    color: '#14990A',
    fontSize: 70,
    marginBottom: 10,
  },
  socialText: {
    fontSize: commonStyles.normalFontSize,
    color: commonColors.placeholderText
  }
});