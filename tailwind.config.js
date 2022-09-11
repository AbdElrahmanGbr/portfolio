const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    mode: 'jit', content: ["./src/**/*.{js,jsx,ts,tsx}",], theme: {
        extend: {
            colors: {
                "blue-magenta": "#33323D",
            }, fontFamily: {
                "customSans": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
            }, screens: {
                'xs': '475px', 'tablet': '640px', ...defaultTheme.screens,
            },
        },
    }, plugins: [],
}