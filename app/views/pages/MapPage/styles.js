import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

export const styles = StyleSheet.create({
  container: {
    height: commonStyles.screenNormalHeight,
    width: commonStyles.screenWidth,
  },
  mapView: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
  },
  marker: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  markerText: {
    fontFamily: commonStyles.normalFont,
    position: 'absolute',
    color: 'white',
    top: 3,
  },
  markerDetailView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 100,
  },
  markerDetailImage: {
    marginBottom: 10,
    width: '100%',
    height: 70,
  },
  markerDetailText: {
    fontFamily: commonStyles.normalFont,
    fontSize: commonStyles.normalFontSize,
    color: commonColors.darkGrayColor,
    textAlign: 'right',
  }
});