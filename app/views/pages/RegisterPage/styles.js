import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabBar: {
    width: commonStyles.screenWidth,
    height: commonStyles.tabBarHieght,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  tbnWrapper: {
    width: '50%',
  },
  tabBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  tabText: {
    color: 'white',
    fontSize: commonStyles.normalFontSize,
  },
  loginContainer: {
    height: commonStyles.screenSubHeight,
    width: '100%',
  },
  btnView: {
    width: '100%',
    height: commonStyles.buttonHeight,
    backgroundColor: commonColors.greenColor,
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
    color: 'white',
    fontSize: commonStyles.normalFontSize,
  },
  fieldContainer: {
    width: '100%',
    height: commonStyles.screenSubHeight - 100,
    justifyContent:'center',
    alignItems: 'center',
  },
  inputView: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: commonColors.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: commonStyles.padding,
    height: 50,
  },
  input: {
    color: commonColors.placeholderText,
    width: commonStyles.screenWidth - 80,
    fontSize: commonStyles.normalFontSize,
  },
  iconView: {
    width: 50,
    alignItems: 'flex-end',
    marginRight: 5,
  },
  inputIcon: {
    color: '#EC33AA',
    fontSize: 25,
  },
  forgotPasswordView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: commonStyles.padding,
    height: 50,
  },
  forgotPasswordText: {
    color: commonColors.placeholderText,
    fontSize: commonStyles.normalFontSize,
    fontStyle: 'italic',
  }
});