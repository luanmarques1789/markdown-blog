const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				quicksand: ['Quicksand', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				mavi: {
					tone1: '#F2F2F2',
					tone2: '#91C5F2',
					tone3: '#4BA4F2',
					tone4: '#296CA6',
					tone5: '#1D4B73',
					tone6: '#0f172a',
				},
			},
		},
	},
	plugins: [],
});
