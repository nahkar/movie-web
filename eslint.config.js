import tsPlugin from '@typescript-eslint/eslint-plugin';
import ts from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
	{
		ignores: ['dist'],
	},
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parser: ts,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				sourceType: 'module',
			},
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'prettier/prettier': 'error',
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'@typescript-eslint': tsPlugin,
			prettier: prettier,
		},
	},
	{
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		rules: {
			...prettierConfig.rules,
		},
	},
];
