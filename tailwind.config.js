module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    maxHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      '1/2-screen': '50vh',
      '3/4-screen': '75vh',
      '90-screen': '90vh'
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      base: '0px 2px 8px rgba(0, 0, 0, 0.1)'
    },
    extend: {
      keyframes: {
        slideInDown: {
          '0%': { transform: 'translateY(-20%)' },
          '100%': { transform: 'translateY(0)' }
        },
        bounceSlow: {
          '0%': {
            transform: 'translateY(-5%)'
          },
          '50%': {
            transform: 'translateY(0%)'
          },
          '100%': {
            transform: 'translateY(-5%)'
          }
        },
        dance: {
          '0%': {
            transform: 'rotate(-5deg)'
          },
          '50%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(-5deg)'
          }
        }
      }
    },
    fontFamily: {
      'nunito-sans': ['Nunito Sans', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('tailwind-scrollbar-hide')]
};
