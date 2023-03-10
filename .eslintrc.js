module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "airbnb", "prettier"],
	overrides: [],
	parserOptions: {
		ecmaVersioen: "latest",
		sourceType: "module",
	},
	plugins: ["react", "prettier"],
	rules: {
		"react/jsx-filename-extension": "off",
		"react/function-component-definition": "off",
		"arrow-body-style": "off",
		"react/prop-types": "off",
		"no-unused-vars": "warn",
		"react/no-array-index-key": "off",
		"import/no-unresolved": "off",
	},
};
