/* eslint-disable no-param-reassign */
import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  webpackFinal: async (newConfig) => {
    newConfig.stats = 'errors-only';
    newConfig.resolve = {
      ...newConfig.resolve,
      alias: {
        ...newConfig?.resolve?.alias,
        '@': path.resolve(__dirname, '../'),
      },
    };
    return newConfig;
  },
  stories: [
    '../**/*.mdx',
    '../**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@storybook/addon-webpack5-compiler-babel',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};
export default config;
