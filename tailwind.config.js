module.exports = {
  mode: 'jit',
  content: [
    './assets/**/*.css',
    './components/*.{vue,js}',
    './components/**/*.{vue,js}',
    './composables/*.{ts,js}',
    './composables/**/*.{ts,js}',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './*.{vue,js}',
  ],
  salfeList: [
    'btn-primary',
    'btn-accent',
    'btn-secondary',
    'bg-info',
    'bg-success',
    'bg-warning',
    'bg-error',
  ],
  theme: {
    aspectRatio: {
      40: '40',
      21: '21',
    },
    extend: {
      typography: {
        xs: {
          css: {
            fontSize: '0.8125rem',
          },
        },
        '2xs': {
          css: {
            fontSize: '0.75rem',
            width: '100% !important',
          },
        },
      },
      screens: {
        xs: '320px',
        '3xl': '1600px',
      },
    },
  },
  variants: {
    extend: {
      margin: ['first', 'last'],
      padding: ['first', 'last'],
      backgroundColor: ['hover'],
      borderColor: ['checked'],
      opacity: ['disabled', 'hover'],
      ringWidth: ['hover'],
      borderRadius: ['first', 'last'],
      scale: ['group-hover'],
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: '#14AF4A',

          secondary: '#0f0f0f',

          accent: '#F471B5',

          neutral: '#000000',

          info: '#0CA6E9',

          success: '#2BD4BD',

          warning: '#F4C152',

          error: '#FB6F84',

          '--rounded-box':
            '1rem' /* border-radius for cards and other big elements */,
          '--rounded-btn':
            '0.85rem' /* border-radius for buttons and similar elements */,
          '--rounded-badge':
            '1.9rem' /* border-radius for badge and other small elements */,

          '--animation-btn': '0.25s' /* bounce animation time for button */,
          '--animation-input':
            '.2s' /* bounce animation time for checkbox, toggle, etc */,

          '--padding-card': '1rem' /* default card-body padding */,

          '--btn-text-case': 'uppercase' /* default text case for buttons */,
          '--navbar-padding': '.5rem' /* default padding for navbar */,
          '--border-btn': '1px' /* default border size for button */,
          '--focus-ring': '2px' /* focus ring size for button and inputs */,
          '--focus-ring-offset': '2px',
        },
      },
    ],
    utils: true,
    logs: true,
    // rtl: true,
  },
}
