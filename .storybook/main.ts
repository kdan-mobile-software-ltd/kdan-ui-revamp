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
    '../stories/**/*.mdx',
    '../**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
