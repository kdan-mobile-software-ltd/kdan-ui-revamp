import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/constants/themes/globalstyle';
import themes from '../constants/themes';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (StoryFn) => (
      <div style={{ zoom: 0.7 }}>
        <ThemeProvider theme={themes}>
          <GlobalStyles />
          <StoryFn />
        </ThemeProvider>
      </div>
    ),
  ],
};

export default preview;
