/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Spoqa Han Sans Neo", "Arial", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
