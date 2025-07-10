module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{png,pdf,svg,css,js,jpeg,html}'
	],
	swDest: 'dist',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};