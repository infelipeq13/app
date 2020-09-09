const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mono: ["Cousine", ...defaultTheme.fontFamily.mono, "monospace"],
  sans: ["Poppins", ...defaultTheme.fontFamily.sans],
  serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
};
