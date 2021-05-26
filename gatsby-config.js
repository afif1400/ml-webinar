module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true, // defaults to false
				jsxPragma: `jsx`, // defaults to "React"
				allExtensions: true, // defaults to false
			},
		},
		`gatsby-plugin-transition-link`,
		`gatsby-plugin-fontawesome-css`,
	],
};
