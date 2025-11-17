/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            scrollBehavior: ['smooth']
        },
        fontFamily: {
            'chakra-petch': ['Chakra Petch', 'sans-serif'],
            'm-plus': ['M PLUS Rounded 1c', 'sans-serif'],
            'noto-serif': ['Noto Serif JP', 'Noto Serif TC', 'serif']
        }
    },
    daisyui: {
        themes: false,
        darkTheme: false
    },
    plugins: [
        require('daisyui'),
        require('tailwindcss-animated'),
        require('@tailwindcss/line-clamp')
    ]
}
