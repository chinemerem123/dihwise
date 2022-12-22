module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        black_900_7f: "#06002a7f",
        gray_600: "#797979",
        gray_400: "#b3b3b3",
        gray_500: "#979797",
        gray_800: "#4b4b4b",
        gray_400_3f: "#c0c0c03f",
        green_700: "#1bb319",
        gray_700_3f: "#5d5d5d3f",
        gray_50: "#fafafa",
        green_A700: "#15c013",
        black_900_66: "#06002a66",
        black_900: "#000000",
        gray_400_26: "#afafaf26",
        black_901: "#06002a",
        white_A700: "#ffffff",
      },
      borderRadius: {
        radius5: "5px",
        radius10: "10px",
        radius50: "50%",
        radius475: "47.5px",
      },
      fontFamily: {
        nunito: "Nunito",
        inter: "Inter",
        lato: "Lato",
        roboto: "Roboto",
        sansation: "Sansation",
      },
      textShadow: { ts: "0px 10px  30px #5d5d5d3f" },
      boxShadow: {
        bs1: "0px 10px  30px 0px #afafaf26",
        bs: "0px 20px  50px 0px #c0c0c03f",
      },
      letterSpacing: {
        ls1: "1px",
        ls06: "0.6px",
        ls15: "1.5px",
        ls051: "0.51px",
        ls075: "0.75px",
        ls105: "1.05px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
