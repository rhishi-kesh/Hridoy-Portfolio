/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
  	container: {
  		padding: {
  			DEFAULT: '15px',
  		},
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '960px',
  		xl: '1200px',
  	},
  	fontFamily: {
  		primary: 'Lato'
  	},
  	backgroundImage: {
  		hero: 'url(../assets/hero/bg.jpg)',
  	},
    extend: {
    	colors: {
    		primary: {
				DEFAULT: '#D50056',
				hover: '#D50056',
			},
			black: {
				DEFAULT: '#060D0D',
				hover: '#060D0D',
			}
    	},
    },
  },
  plugins: [],
}

