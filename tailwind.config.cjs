/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'roboto': ['Roboto', 'sans-serif'],
				'nunito': ["'Nunito'", 'sans-serif'],
			},
			colors: {
				primary: '#f2c56a',
				secondary: '#43466f',
				"tt-blue": '#868DF5',
				'tt-text': '#111827',
				"tt-blue-2": "#434671"
			}
		},
	},
	plugins: [],
}
