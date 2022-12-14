module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'accent-color':'#1f2937',
      'accent-color-light': '#445a78',
        blurple: '#635BFF',
        'light-gray': '#F6F9FC',
        'dark-gray': {
          DEFAULT: '#232323',
          900: '#393939',
          800: '#4F4F4F',
          700: '#656565',
          600: '#7B7B7B',
          500: '#919191',
          400: '#A7A7A7',
          300: '#BDBDBD',
          200: '#D3D3D3',
          100: '#E9E9E9',
          50: '#F4F4F4',
          20: '#F8F8F8',
        },
        'light-blue': {
          DEFAULT: '#9AB6D0',
          900: '#A4BDD5',
          800: '#AEC5D9',
          700: '#B8CCDE',
          600: '#C2D3E3',
          500: '#CCDAE7',
          400: '#D7E2EC',
          300: '#E1E9F1',
          200: '#EBF0F6',
          100: '#F0F4F8',
          50: '#F5F8FA',
          20: '#FAFBFD',
        },
        slate: '#0A2540',
        'pale-blurple': '#7A73FF',
        cyan: '#80E9FF',
        turquoise: '#11EFE3',
        amber: '#FFBB00',
        magenta: '#FF80FF',
        cobalt: '#0048E5',
        cerulean: '#0073E6',
        heliotrope: '#AD4FFB',
        yellow: '#FBEECE',
        'light-brown': '#BA9F5D',
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}



