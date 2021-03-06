import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';
import { tabBarHieght } from '../../../common/styles/commonStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: commonStyles.screenNormalHeight,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  videoView: {
    width: commonStyles.screenWidth,
    height: 200,
    backgroundColor: commonColors.darkGrayColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoThumbnail: {
    width: commonStyles.screenWidth,
    height: 200,
  },
  titleView: {
    marginVertical: 20,
    paddingHorizontal: commonStyles.padding,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontFamily: commonStyles.normalFont,
    fontSize: commonStyles.normalFontSize,
    fontWeight: 'bold',
    textAlign: 'right',
    color: commonColors.placeholderText,
  },
  textPhone: {
    fontFamily: commonStyles.normalFont,
    fontSize: commonStyles.normalFontSize,
    textAlign: 'right',
    color: '#88AC40',
  },
  description: {
    width: '100%',
    paddingHorizontal: commonStyles.padding,
  },
  textDescription: {
    fontFamily: commonStyles.normalFont,
    fontSize: commonStyles.normalFontSize,
    color: commonColors.placeholderText,
    textAlign: 'right'
  },
  bold: {
    fontWeight: 'bold',
  },
  itemView: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: commonColors.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: commonStyles.padding,
    height: 50,
  },
  iconOffice: {
    width: 45,
    height: 45,
    marginVertical: 10,
  },
  separate: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: commonColors.borderColor,
    height: 1,
    marginTop: 20,
  },
  icon: {
    color: 'white',
    fontSize: 40,
  },
  editBtnView: {
    height: commonStyles.buttonHeight,
    backgroundColor: commonColors.pinkColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postBtnView: {
    marginVertical: 10,
    height: commonStyles.buttonHeight,
    backgroundColor: commonColors.greenColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  textEdit: {
    fontFamily: commonStyles.normalFont,
    fontSize: commonStyles.normalFontSize,
    color: 'white',
  },
});