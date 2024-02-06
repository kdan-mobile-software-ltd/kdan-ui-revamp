import { CustomThemeType } from '@/constants/themes';
import { CustomColor } from '@/constants/themes/colors';

export const getCustomColorFromTheme = (
  theme: CustomThemeType,
  customColor: CustomColor,
): CustomColor => theme.colors?.[customColor] || customColor;
