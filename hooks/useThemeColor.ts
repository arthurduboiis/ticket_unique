/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '../constants/Colors';
import { useThemeStore } from '../store/ThemeStore';

export function useThemeColor(
  colorName: keyof typeof Colors.light.light & keyof typeof Colors.light.dark,
  props?: { light?: string; dark?: string },
) {
  const theme = useThemeStore((state) => state.theme);
  if(props){

    const colorFromProps = props[theme];
    if (colorFromProps) {
      return colorFromProps;
    }
  }

    return Colors[theme][colorName];
}

