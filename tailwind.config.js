const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
	darkMode: 'class',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {
			screens: {
				'2xl-max': { max: '1535px' },
				// => @media (max-width: 1535px) { ... }

				'xl-max': { max: '1279px' },
				// => @media (max-width: 1279px) { ... }

				'lg-max': { max: '1023px' },
				// => @media (max-width: 1023px) { ... }

				'md-max': { max: '767px' },
				// => @media (max-width: 767px) { ... }

				'sm-max': { max: '639px' },
				// => @media (max-width: 639px) { ... }
			},
			colors: {
				discord: {
					900: '#202225',
					800: '#2f3136',
					700: '#36393f',
					600: '#4f545c',
					400: '#d4d7dc',
					300: '#e3e5e8',
					200: '#ebedef',
					100: '#f2f3f5',
				},
				dark: '#222222',
			},
			fontFamily: {
				primary: ['Inter', ...fontFamily.sans],
			},
			minWidth: {
				xs: '20rem',
				sm: '24rem',
				md: '28rem',
				lg: '32rem',
				xl: '36rem',
				'2xl': '42rem',
			},
			width: {
				100: '28rem',
				104: '32rem',
			},
			minHeight: {
				6: '6rem',
				8: '8rem',
				10: '10rem',
				12: '12rem',
				24: '24rem',
				40: '40rem',
			},
			maxWidth: {
				4: '4rem',
				8: '8rem',
			},
		},
	},
	plugins: [],
}
