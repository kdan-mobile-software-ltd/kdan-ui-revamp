import React, { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components';
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

export const KdanUiThemeProvider: React.FC<{ children: ReactNode }> = ({children}) => (
  <ThemeProvider theme={themes}>
    {children}
  </ThemeProvider>
)

export default themes;
