const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    mode: 'jit',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'xs': '475px',
            'tablet': '640px',
            ...defaultTheme.screens,
        },
        extend: {},
    },
    plugins: [],
}