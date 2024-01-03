import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import del from 'rollup-plugin-delete';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';
import pkg from './package.json';

export default {
	input: 'src/index.tsx',
	output: [
		{
			format: 'cjs',
			dir: 'dist/cjs',
			preserveModules: true,
			preserveModulesRoot: 'src',
			exports: 'named',
		},
		{
			format: 'es',
			dir: 'dist/esm',
			preserveModules: true,
			preserveModulesRoot: 'src',
			exports: 'named',
		},
	],
	external: [
		...Object.keys(pkg.dependencies || {}),
		...Object.keys(pkg.peerDependencies || {}),
		'./src',
	],
	plugins: [
		peerDepsExternal(),
		typescript({
			typescript: ttypescript,
			tsconfig: './tsconfig.build.json',
		}),
		nodeResolve(),
		commonjs(),
		babel({
			babelHelpers: 'runtime',
			exclude: 'node_modules/**',
			extensions: ['.ts', '.tsx'],
		}),
		terser(),
		del({ targets: 'dist/*' }),
	],
};
