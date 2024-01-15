/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        Fpurple: 'crimson',
        Fyellow: 'rgba(225, 223, 164, 1)',
        Fblues: 'rgba(227, 236, 241, 1)',
        Freds: 'rgba(244, 227, 229, 1)',
        Fblue: 'rgba(67, 143, 254, 1)',
        Fgreen: 'rgba(112, 207, 151, 1)',
        Fred: 'rgba(255, 99, 112, 1)',
        Flogin: 'rgba(71, 118, 208, 1)',
        Fblack: '#1F2128',
        Fgray: '#F3F5F8',
        Ftextgray: '#5F6165',
        Finputbg: '#F5F4F6',
        Finputtext: '#7C7C8D' ,
        FdarkMode : '#242731' ,
        FbodyDarkMode : '#1F2128'

      },

      fontFamily: {
        dm: ["DM Sans, sans-serif"]
      },

      fontSize: {
        'logo': ['24px', {
          lineHeight: '25px',
          fontWeight: '700'
        },
        ],
        'menu': ['14px', {
          lineHeight: '24px',
          fontWeight: '500'
        }],
        'sections': ['20px', {
          lineHeight: '24px',
          fontWeight: '700'
        }],
        'span': ['20px', {
          lineHeight: '24px',
          fontWeight: '400'
        }],
        'search': ['15px', {
          lineHeight: '24px',
          fontWeight: '500'
        }],
        'bsections': ['16px', {
          lineHeight: '24px',
          fontWeight: '700'
        }]
      }
    },
  },
  plugins: [],
}