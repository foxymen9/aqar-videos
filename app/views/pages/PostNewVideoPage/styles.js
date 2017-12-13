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
  thumbnail: {
    width: '100%',
    height: 200,
  },
  titleView: {
    marginVertical: 20,
    paddingHorizontal: commonStyles.padding,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  textTitle: {
    fontSize: commonStyles.normalFontSize,
    fontWeight: 'bold',
    textAlign: 'right',
    color: commonColors.placeholderText,
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
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: '#C3C3C3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: commonStyles.padding,
    height: 50,
  },
  iconOffice: {
    width: 45,
    height: 45,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#f00'
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
    height: 40,
    backgroundColor: commonColors.pinkColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPreview: {
    fontSize: commonStyles.normalFontSize,
    color: 'white',
  }
});