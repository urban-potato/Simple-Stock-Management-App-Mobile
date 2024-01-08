/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primaryColor: '#6D2AF8',
				primaryDarkColor: '#1E1C2E',
				primarySemiDarkColor: '#52388A',
				secondaryColor: '#8D8A97',
				secondaryLightColor: '#D9D4E8',
				secondaryDarkColor: '#58565E'
			}
		}
	},
	plugins: []
}
