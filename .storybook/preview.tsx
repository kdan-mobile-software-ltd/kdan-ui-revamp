import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/constants/themes/globalstyle';
import themes from '../constants/themes';

const customViewports = {
  desktop: {
    name: 'Desktop (Max)',
    styles: {
      width: '1920px',
      height: '100%',
    },
  },
  laptop: {
    name: 'Laptop (Max)',
    styles: {
      width: '1280px',
      height: '100%',
    },
  },
  tablet: {
    name: 'Tablet (Max)',
    styles: {
      width: '1024px',
      height: '100%',
    },
  },
  mobile: {
    name: 'Mobile (Max)',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
  mobileMin: {
    name: 'Mobile (Min)',
    styles: {
      width: '320px',
      height: '100%',
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: customViewports,
      defaultViewport: 'tablet',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: { order: ['Component', 'Section'] },
    },
  },
  decorators: [
    (StoryFn) => (
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <StoryFn />
      </ThemeProvider>
    ),
  ],
};

export default preview;
