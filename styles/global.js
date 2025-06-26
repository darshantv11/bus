import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
  },
});
