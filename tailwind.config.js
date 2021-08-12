module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './public/**/*.html',
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './layouts/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        accent: '#9C37B5',
        brand: {
          light: '#572361',
          dark: '#17162E',
        },
        fantasy: {
          light: '#8D082E', // 80',
          dark: '#611A2C', // 80',
        },
        scifi: {
          light: '#406A88', // 80',
          dark: '#263D59', // 80',
        },
        horror: {
          light: '#729258', // 80',
          dark: '#2D4A31', // 80',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
