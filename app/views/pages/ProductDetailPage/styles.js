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
  thumbnail: {
    width: '100%',
    height: 200,
  },
  titleView: {
    marginVertical: 20,
    paddingHorizontal: commonStyles.padding,
    width: '100%',
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
    width: 50,
    height: 50,
    marginTop: 20,
    marginBottom: 10,
  },
  separate: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: '#C3C3C3',
    height: 1,
  },
  btnView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  btnFavorite: {
    backgroundColor: '#D6D6D6',
    width: 80,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnShare: {
    backgroundColor: '#EB0089',
    width: 80,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSend: {
    width: commonStyles.screenWidth - 160,
    backgroundColor: '#88AC40',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: commonStyles.padding,
  },
  sendTextWrapper: {
    marginRight: 20,
  },
  textSend: {
    fontSize: commonStyles.normalFontSize,
    color: 'white',
    textAlign: 'right',
  },
  icon: {
    color: 'white',
    fontSize: 40,
  },
  btnAd: {
    flexDirection: 'row',
    paddingHorizontal: commonStyles.padding,
    alignItems: 'center',
  },
  iconAd: {
    color: '#AAA',
    fontSize: 25,
    marginLeft: 5,
  },
});