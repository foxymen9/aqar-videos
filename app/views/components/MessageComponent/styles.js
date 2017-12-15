import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

export const styles = StyleSheet.create({
  sendContainer: {
    paddingHorizontal: commonStyles.padding,
    paddingVertical: 5,
    alignItems: 'flex-end',
    marginTop: 10,
  },
  receiveContainer: {
    paddingHorizontal: commonStyles.padding,
    paddingVertical: 5,
    alignItems: 'flex-start',
    marginTop: 10,
  },
  sendMessageContainer: {
    maxWidth: commonStyles.screenWidth * 0.7,
    alignItems: 'flex-end',
  },
  receiveMessageContainer: {
    maxWidth: commonStyles.screenWidth * 0.7,
    alignItems: 'flex-start',
  },
  sendMessageBox: {
    backgroundColor: '#EFEFEF',
    marginVertical: 5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  receiveMessageBox: {
    backgroundColor: commonColors.greenColor,
    marginVertical: 5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendMessage: {
    textAlign: 'right',
    color: commonColors.placeholderText,
    fontSize: 16,
  },
  receiveMessage: {
    textAlign: 'right',
    color: 'white',
    fontSize: 16,
  },
  name: {
    textAlign: 'right',
    color: commonColors.placeholderText,
    fontSize: commonStyles.normalFontSize,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  date: {
    textAlign: 'right',
    color: commonColors.placeholderText,
    fontSize: 12,
    fontStyle: 'italic',
    paddingHorizontal: 15,
  },
  body: {
    flexDirection: 'row',
  },
  triangel: {
    marginTop: 15,
  }
});