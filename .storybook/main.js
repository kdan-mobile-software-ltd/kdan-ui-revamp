const path = require('path');

module.exports = {
	core: {
		builder: 'webpack5',
	},
	webpackFinal: async (config) => {
		config.stats = 'errors-only';
		config.resolve.alias = {
			...config.resolve.alias,
			'@src': path.resolve(__dirname, '../src/'),
		};
		config.resolve.modules.push('src');
		return config;
	},
	framework: '@storybook/react',
	stories: [
		'../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
		'./**/__stories__/*.stories.@(js|jsx|ts|tsx|mdx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
	],
	features: {
		storyStoreV7: false,
	},
	// https://storybook.js.org/docs/react/configure/images-and-assets#serving-static-files-via-storybook-configuration
	// staticDirs: ['./public'],
};
