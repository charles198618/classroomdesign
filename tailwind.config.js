module.exports = {
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					default: '#613bdb',
				},
			},
			fontFamily: {
				title: ['Mote'],
			},
			screens: {
				'3xl': '1600px',
			},
		},
		container: {
			center: true,
		},
	},
	variants: {
		extend: {
			textOpacity: ['dark'],
		},
	},
	plugins: [],
};
