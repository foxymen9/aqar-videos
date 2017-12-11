import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';
import { tabBarHieght } from '../../../common/styles/commonStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: commonStyles.screenHeight - commonStyles.tabBarHieght,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btnView: {
    width: '100%',
    height: 40,
    backgroundColor: '#EB0089',
    position: 'absolute',
    bottom: 60,
  },
  btnWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: commonStyles.normalFontSize,
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
  description: {
    marginTop: 20,
    height: commonStyles.screenHeight - commonStyles.tabBarHieght - 320,
  },
  descriptionScrollView: {
    width: '100%',
    paddingHorizontal: commonStyles.padding,
  },
  textDescription: {
    fontSize: 14,
    color: commonColors.placeholderText,
    textAlign: 'right'
  },
  //Success page
  successTextWrapper: {
    padding: 30,
  },
  textSuccess: {
    fontSize: 20,
    textAlign: 'center',
    color: commonColors.darkGrayColor,
    lineHeight: 0.3,
  },
  bold: {
    fontWeight: 'bold',
  }
});