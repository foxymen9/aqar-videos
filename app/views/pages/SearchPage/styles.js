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
  thumbnail: {
    width: '100%',
    height: 200,
  },
  titleView: {
    marginVertical: 15,
    paddingHorizontal: commonStyles.padding,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  textTitle: {
    fontFamily: commonStyles.normalFont,
    fontWeight: 'bold',
    fontSize: commonStyles.normalFontSize,
    textAlign: 'right',
    color: commonColors.placeholderText,
    marginBottom: 3,
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
    fontFamily: commonStyles.normalFont,
    fontWeight: 'bold',
  },
  itemView: {
    width: commonStyles.screenWidth,
    borderBottomWidth: 0.5,
    borderColor: commonColors.borderColor,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: commonStyles.padding,
    marginVertical: 5,
    paddingVertical: 10,
  },
  productOptionView: {
    width: commonStyles.screenWidth,
    borderBottomWidth: 0.5,
    borderColor: commonColors.borderColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: commonStyles.padding,
    marginVertical: 5,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  radioGroup: {
    flexDirection: 'row',
  },
  searchBtnView: {
    marginVertical: 40,
    height: commonStyles.buttonHeight,
    backgroundColor: commonColors.greenColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSearch: {
    fontFamily: commonStyles.normalFont,
    fontSize: commonStyles.normalFontSize,
    color: 'white',
  },
  icon: {
    marginBottom: 10,
  },
  inputPrice: {
    fontFamily: commonStyles.normalFont,
    fontWeight: 'bold',
    width: '100%',
    fontSize: 17,
    color: commonColors.placeholderText,
    textAlign: 'center',
  },
  input: {
    fontFamily: commonStyles.normalFont,
    fontWeight: 'bold',
    width: '100%',
    fontSize: 17,
    color: commonColors.placeholderText,
    textAlign: 'right',
  },
  squareMeterBox: {
    width: 160,
    borderWidth: 2,
    borderColor: commonColors.placeholderText,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  linebar: {
    color: commonColors.placeholderText,
    marginHorizontal: 10,
    fontSize: 30,
  }
});