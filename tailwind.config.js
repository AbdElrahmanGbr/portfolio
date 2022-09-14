const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    mode: 'jit',   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                "blue-magenta": "#33323D",
                "inputBg-offWhite": "#EBEBEC",
                "formBtnBg-notDisabled": "#203A4C",
                "formBtnBg-notDisabled-hover": "#5fb4a2",
                "homeFontColor": "rgb(95, 180, 162)",
                "arrowDownBg": "#1D3445",
                "aboutMeBg": "#203A4C",
                "shadowColor": "5FB4A2",
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