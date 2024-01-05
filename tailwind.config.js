/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primaryColor: '#6D2AF8',
				// primaryColor: '#664EFE',
				primaryDarkColor: '#1E1C2E',
				secondaryColor: '#8D8A97'
			}
		}
	},
	plugins: []
}
