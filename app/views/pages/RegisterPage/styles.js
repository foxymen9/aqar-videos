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
    height: 40,
    backgroundColor: '#88AC40',
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
  fieldContainer: {
    width: '100%',
    height: commonStyles.screenSubHeight - 100,
    justifyContent:'center',
    alignItems: 'center',
  },
  inputView: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: '#C3C3C3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: commonStyles.padding,
    height: 50,
  },
  input: {
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
    justifyContent: 'flex-end',
    paddingHorizontal: commonStyles.padding,
    height: 50,
  },
  forgotPasswordText: {
    color: commonColors.placeholderText,
    fontSize: commonStyles.normalFontSize,
    fontStyle: 'italic',
  }
});