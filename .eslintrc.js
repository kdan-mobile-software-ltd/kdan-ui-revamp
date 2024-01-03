module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
	],
	plugins: ['react-hooks', 'testing-library'],
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/ban-ts-comment': 'warn',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
			},
		},
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react'],
			rules: {
				'testing-library/await-async-query': 'error',
				'testing-library/no-await-sync-query': 'error',
				'testing-library/no-debugging-utils': 'warn',
				'testing-library/no-dom-import': 'off',
			},
		},
	],
	rules: {
		'react/jsx-no-bind': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		quotes: ['error', 'single'],
	},
};
