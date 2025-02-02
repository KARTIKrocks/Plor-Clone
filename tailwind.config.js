/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    fontSize: {
      xx: "13px",
      nav: "0.91875em",
      banner: "52px",
      40: "2.5em",
      1.25: "17px",
    },
    letterSpacing: {
      xx: "1.05px",
      nav: "0.63px",
    },
    gridTemplateColumns: {
      top: "1.1fr 1.2fr 3em",
      nav: "1fr 1fr",
    },
    height: {
      ban: "38em",
      2.5: "2.75em",
      full: "100%",
      37: "37rem",
      9: " 22.5em",
      26: "26.875em",
      40: "30em",
    },
    maxHeight: {
      ban: "56em",
    },
    lineHeight: {
      ban: "68px",
      4: "19px",
      17: "17px",
      52: "52px",
      30: "30px",
    },
    fontFamily: {
      Lora: ['"Lora"', ' "serif"'],
      Cardo: ['"Cardo"', ' "serif"'],
    },

    extend: {
      spacing: {
        100: "25.7em",
        110: "33em",
      },
      colors: {
        "light-black": "#2e2a39",
        text: "rgba(46, 42, 57, 0.75)",
      },
      boxShadow: {
        btn: "#888888 1px 1px 10px 0.1px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(123deg, rgba(77,77,77,1) 0%, rgba(77,77,77,1) 54%, rgba(77,77,77,1) 100%)",
      },
      width: {
        9: " 22.5em",
        115: "26em",
        36: "36%",
        
      },
      transitionDuration: {
        slow: "1s",
      },
      blur: {
        xx: "0.5px",
      },
      borderWidth: {
        xxs: ".7px",
      },
    },
  },
  plugins: [],
};
