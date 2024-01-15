import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { KDAN_S3_STORAGE } from '../constants/config';
import themes from '../constants/themes';

const GlobalStyles = createGlobalStyle`
 body:lang(en) {
    font-family: 'Clear Sans', sans-serif;
  }
  body:lang(zh-tw) {
    font-family: 'Noto Sans TC', sans-serif;
  }
  body:lang(zh-cn) {
    font-family: 'Noto Sans SC', sans-serif;
  }
  body:lang(ja) {
    font-family: 'Noto Sans JP', sans-serif;
  }
  body:lang(es),
  body:lang(ko) {
    font-family: 'Open Sans', sans-serif;
  }

  @font-face {
    font-family: "Clear Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${KDAN_S3_STORAGE}/common/fonts/clearsans/fonts/woff2-convert/ClearSans-Regular.woff2);
  }
  
  @font-face {
    font-family: "Clear Sans";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${KDAN_S3_STORAGE}/common/fonts/clearsans/fonts/woff2-convert/ClearSans-Medium.woff2);
  }
  
  @font-face {
    font-family: "Clear Sans";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${KDAN_S3_STORAGE}/common/fonts/clearsans/fonts/woff2-convert/ClearSans-Bold.woff2);
  }
`;
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
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <StoryFn />
      </ThemeProvider>
    ),
  ],
};

export default preview;
