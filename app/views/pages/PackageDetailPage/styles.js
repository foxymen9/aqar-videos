import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';
import { tabBarHieght } from '@common/styles/commonStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: commonStyles.screenNormalHeight,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btnView: {
    width: '100%',
    height: commonStyles.buttonHeight,
    backgroundColor: commonColors.pinkColor,
    position: 'absolute',
    bottom: commonStyles.buttonBottomHeight,
  },
  btnWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: commonStyles.normalFont,
    color: 'white',
    fontSize: commonStyles.normalFontSize,
  },
  thumbnailView: {
    width: '100%',
    height: 200,
  },
  thumbnail: {
    height: '100%',
    width:'100%'
  },
  titleView: {
    position: 'absolute',
    right: commonStyles.padding,
    bottom: 30,
    backgroundColor: 'transparent',
  },
  remainDay: {
    fontFamily: commonStyles.boldFont,
    color: 'white',
    fontSize: 20,
    textAlign: 'right',
    marginBottom: 40,
  },
  titleDay: {
    fontFamily: commonStyles.boldFont,
    color: 'white',
    fontSize: 30,
    textAlign: 'right'
  },
  titleDesc: {
    fontFamily: commonStyles.normalFont,
    color: 'white',
    fontSize: 30,
    textAlign: 'right'
  },
  description: {
    marginTop: 20,
    height: commonStyles.screenNormalHeight - 320,
  },
  descriptionScrollView: {
    width: '100%',
    paddingHorizontal: commonStyles.padding,
  },
  textDescription: {
    fontFamily: commonStyles.normalFont,
    fontSize: 14,
    color: commonColors.placeholderText,
    textAlign: 'right'
  },
  //Success page
  successTextWrapper: {
    padding: 30,
  },
  textSuccess: {
    fontFamily: commonStyles.normalFont,
    fontSize: 20,
    textAlign: 'center',
    color: commonColors.darkGrayColor,
    lineHeight: 0.3,
  },
  bold: {
    fontFamily: commonStyles.boldFont,
  },
  imgClose: {
    marginTop: 30,
    width: 50,
    height: 50,
  }
});