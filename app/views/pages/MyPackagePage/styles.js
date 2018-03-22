import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '@common/styles/commonStyles';
import * as commonColors from '@common/styles/commonColors';

const listItemWidth = (commonStyles.screenWidth - commonStyles.padding * 2 - 15) / 2;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: commonStyles.screenNormalHeight,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: commonStyles.padding,
  },
  packageView: {
    flexDirection: 'row',
  },
  titleView: {
    padding: 10,
    flex: 1,
    backgroundColor: commonColors.greenColor,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: commonStyles.normalFont,
    textAlign: 'right',
    color: 'white',
    fontSize: 20,
  },
  description: {
    fontFamily: commonStyles.normalFont,
    textAlign: 'right',
    fontSize: 12,
    color: 'white',
  },
  buttonView: {
    backgroundColor: commonColors.placeholderSubText,
    padding: 10,
    marginLeft: 10,
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    borderRadius: 5,
    backgroundColor: 'red',
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  buttonText: {
    fontFamily: commonStyles.normalFont,
    textAlign: 'right',
    fontSize: 12,
    color: 'white',
  },
  expiredText: {
    fontFamily: commonStyles.normalFont,
    textAlign: 'right',
    fontSize: 12,
    color: 'red',
  },
  chartView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  circleTitle: {
    color: commonColors.darkGrayColor,
    fontFamily: commonStyles.normalFont,
    textAlign: 'right',
    fontSize: 10,
  },
  circleSubTitle: {
    marginTop: 5,
    color: commonColors.darkGrayColor,
    fontFamily: commonStyles.normalFont,
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
  },
});