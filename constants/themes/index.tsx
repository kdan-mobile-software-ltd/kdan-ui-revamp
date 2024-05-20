import React, { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Color, colors } from './colors';
import { transition } from './others';

export type CustomThemeType = DefaultTheme & {
  colors: Record<Color, string>;
};

const themes = {
  colors,
  transition,
};

export const KdanUiThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={themes}>
    {children}
  </ThemeProvider>
);

export default themes;
