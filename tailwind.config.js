/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primaryDarkColor: '#1E1C2E'
			}
		}
	},
	plugins: []
}
