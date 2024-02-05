import { DefaultTheme } from 'styled-components';
import { Color, colors } from './colors';
import { boxShadows, transition } from './others';

export type CustomThemeType = DefaultTheme & {
  colors: Record<Color, string>;
  boxShadows: Record<keyof typeof boxShadows, string>;
};

const themes = {
  colors,
  boxShadows,
  transition,
};

export default themes;
