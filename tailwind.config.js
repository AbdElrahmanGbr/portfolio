const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    mode: 'jit',   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                "blue-magenta": "#33323D",
            }, fontFamily: {
                "customSans": ["Public Sans", ...defaultTheme.fontFamily.sans],
                "customIbarra": ["Ibarra Real Nova", ...defaultTheme.fontFamily.serif],
            }, screens: {
                'xs': '475px', 'tablet': '640px', ...defaultTheme.screens,
            },
            fontSize:{
                '5.5xl' : '40px',
            },
        },
    }, plugins: [],
}