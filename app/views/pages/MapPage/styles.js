import {
  StyleSheet,
} from 'react-native';
import * as commonStyles from '../../../common/styles/commonStyles';
import * as commonColors from '../../../common/styles/commonColors';

export const styles = StyleSheet.create({
  container: {
    height: commonStyles.screenHeight - commonStyles.tabBarHieght,
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
    position: 'absolute',
    color: 'white',
    top: 3,
  },
});