import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

const listItemWidth = (commonStyles.screenWidth - commonStyles.padding * 2 - 15) / 2;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  listView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 15,
    paddingHorizontal: commonStyles.padding - 7.5,
  },
  listItem: {
    width: listItemWidth,
    marginHorizontal: 7.5,
    marginBottom: 15,
  },
  imageView: {
    width: '100%',
    height: listItemWidth,
    backgroundColor: '#E9E9E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundContent: {
    width: '75%',
    height: '75%',
    borderRadius: listItemWidth/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontFamily: commonStyles.normalFont,
    fontSize: 40,
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  day: {
    fontFamily: commonStyles.normalFont,
    fontSize: 25,
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  footerView: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#747474',
  },
  textTitle: {
    fontFamily: commonStyles.normalFont,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});