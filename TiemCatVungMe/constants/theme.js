import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  black900: '#000000',
  black800: '#1d1d1d',

  pink900: '#f8567b',
  pink800: '#fb98ad',

  gray900: '#888888',

  white900: '#ffffff',
  white800: '#f9f7f9',
  white700: '#e5e4e2',

  blue900: '#1855aa',
  blue800: '#1876f1',

  orange900: '#ee4c2d',
};

export const SIZES = {
  width,
  height,
  xSmall: 10,
  small: 14,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 40,
};
