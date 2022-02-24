import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

export default {
	input: 'src/index.ts',
	output: {
		dir: './dist',
	},
	plugins: [
		external(),
		resolve(),
		typescript({
			rollupCommonJSResolveHack: true,
			exclude: '**/__tests__/**',
			clean: true,
			useTsconfigDeclarationDir: true,
		}),
		commonjs({
			include: ['node_modules/**'],
		}),
	],
};
