module.exports = {
	presets: [
		['@babel/preset-env'],
		[
			'@babel/preset-react',
			{
				runtime: 'automatic',
			},
		],
	],
	plugins: [
		'@emotion',
		'@babel/plugin-transform-runtime',
		[
			'babel-plugin-styled-components',
			{
				ssr: true,
				displayName: true, // enables meaningful class names in developer tools
			},
		],
	],
};
