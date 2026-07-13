/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	content: ["./src/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				'brand-linkedin': '#0a66c2',
				'brand-php': '#474A8A',
				'brand-mysql': '#00758F',
				'brand-redis': '#A41E11',
				'brand-rust': '#1E2650',
				'brand-minio': '#C51B3F',
				'brand-typescript': '#3178C6',
				'brand-electron': '#272A37',
				'brand-react': '#61DBFB',
				'brand-tailwind': '#00BCFF',
				'brand-java': '#007396',
				'brand-android': '#32DE84',
				'brand-claude': '#D97757',
				'link': '#00A6F4'
			},
			fontSize: {
				'2xs': '10px'
			}
		},
	},
	plugins: [],
}

