const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		backgroundColor: theme => ({
		 'primary': '#fae9d8',
		 'secondary': '#71e7ff',
		 'third': '#ebffb8',
		 'danger': '#F4C7AB',
		 'lb': '#91edff'
		})
	},


	plugins: [
	]
};

module.exports = config;