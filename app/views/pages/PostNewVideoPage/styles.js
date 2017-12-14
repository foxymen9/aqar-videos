import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';
import { tabBarHieght } from '../../../common/styles/commonStyles';

const categoryHeight = 100;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: commonStyles.screenNormalHeight,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  videoThumbnail: {
    width: commonStyles.screenWidth,
    height: 200,
  },
  titleView: {
    marginVertical: 10,
    paddingHorizontal: commonStyles.padding,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  textTitle: {
    fontSize: commonStyles.normalFontSize,
    fontWeight: 'bold',
    textAlign: 'right',
    color: commonColors.placeholderText,
    marginBottom: 3,
  },
  textPhone: {
    fontSize: commonStyles.normalFontSize,
    textAlign: 'right',
    color: '#88AC40',
  },
  description: {
    width: '100%',
    paddingHorizontal: commonStyles.padding,
  },
  textDescription: {
    fontSize: commonStyles.normalFontSize,
    color: commonColors.placeholderText,
    textAlign: 'right'
  },
  bold: {
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
  categoryScrollView: {
    width: commonStyles.screenWidth,
    backgroundColor: '#D6D6D6',
  },
  categoryView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  btnCategory: {
    backgroundColor: '#D6D6D6',
    height: categoryHeight,  
    width: categoryHeight,  
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryBack: {
    backgroundColor: commonColors.pinkColor,
    height: categoryHeight,  
    width: categoryHeight,  
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewBtnView: {
    marginVertical: 40,
    height: commonStyles.buttonHeight,
    backgroundColor: commonColors.pinkColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPreview: {
    fontSize: commonStyles.normalFontSize,
    color: 'white',
  },
  input: {
    width: '100%',
    fontSize: commonStyles.normalFontSize,
    color: commonColors.placeholderText,
  },
  icon: {
    marginBottom: 10,
  },
  textCategory: {
    fontSize: commonStyles.normalFontSize,
    color: commonColors.placeholderText,
    textAlign: 'right'
  },
  textCategorySelect: {
    fontSize: commonStyles.normalFontSize,
    color: 'white',
    textAlign: 'right'
  },
});