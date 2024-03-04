import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/constants/themes/globalstyle';
import themes from '../constants/themes';

const customViewports = {
  desktop: {
    name: 'desktop',
    styles: {
      width: '1920px',
      height: '100%',
    },
  },
  laptop: {
    name: 'laptop',
    styles: {
      width: '1280px',
      height: '100%',
    },
  },
  tablet: {
    name: 'tablet',
    styles: {
      width: '1024px',
      height: '100%',
    },
  },
  mobile: {
    name: 'mobile',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: customViewports,
      defaultViewport: 'responsive',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // withThemeFromJSXProvider({
    //   themes: {
    //     light: themes,
    //   },
    //   defaultTheme: 'light',
    //   Provider: ThemeProvider,
    //   GlobalStyles,
    // }) as Decorator<{ [x: string]: any }>,
    (StoryFn) => (
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <StoryFn />
      </ThemeProvider>
    ),
  ],
};

export default preview;
