import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import stylistic from '@stylistic/eslint-plugin'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals"),
	{
		files: [
			"**/*.{js,ts,jsx,tsx}"
		],
		plugins: {
			'@style': stylistic,
		},
		rules: {
			'prefer-const': 'warn',
			'no-unused-vars': 'warn',

			'@style/no-trailing-spaces': 'warn',
			'@style/semi': ['warn', 'never'],
		}
	}
];

export default eslintConfig;
