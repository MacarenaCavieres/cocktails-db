/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                raleway: ["Raleway", "sans-serif"],
            },
            colors: {
                primary: "#153448",
                secondary: "#ca8787",
                tertiary: "#dbaaaad2",
                quaternary: "#4b4141",
                modal: "#fff2f2",
                article: "#ffd0d0",
                "article-random": "#ffeae3",
            },
            width: {
                500: "500px",
            },
        },
    },
    plugins: [],
};
