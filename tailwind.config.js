/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'color-green': '#10A9A0',
                'light-gray': '#ABBBCE',
                'color-red': '#E53A4F',
            },
        },
    },
    plugins: [],
};
