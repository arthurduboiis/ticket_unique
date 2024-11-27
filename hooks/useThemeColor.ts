/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';

import { Colors } from '../constants/Colors';

export function useThemeColor(
  colorName: keyof typeof Colors.light.light & keyof typeof Colors.light.dark,
  props?: { light?: string; dark?: string },
) {
  const theme = useColorScheme() ?? 'light';
  console.log('theme', theme);
  if(props){

    const colorFromProps = props[theme];
    if (colorFromProps) {
      return colorFromProps;
    }
  }

    return Colors[theme][colorName];
}
