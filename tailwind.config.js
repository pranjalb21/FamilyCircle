/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            spacing: {
                108: "27rem",
                120: "30rem"
            },
        },
        fontFamily: {
            NunitoSans: ["Nunito Sans"],
        },
        scale: {
            101: "1.01",
        },
        backgroundImage: {
            about: "url('./src/assets/back.png')",
        },
    },
    plugins: [],
};
