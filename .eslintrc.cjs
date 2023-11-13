module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:mdx/recommended",
		"plugin:storybook/recommended",
		"plugin:prettier/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs", ".prettierrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
	overrides: [
		{
			files: ["*.md", "*.mdx"],
			extends: "plugin:mdx/recommended",
		},
	],
	settings: {
		react: {
			version: "detect",
		},
	},
}
