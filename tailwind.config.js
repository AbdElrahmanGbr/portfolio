const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    mode: 'jit',   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                "blue-magenta": "#33323D",
            }, fontFamily: {
                "customSans": ["Public Sans", ...defaultTheme.fontFamily.sans],
            }, screens: {
                'xs': '475px', 'tablet': '640px', ...defaultTheme.screens,
            },
        },
    }, plugins: [],
}