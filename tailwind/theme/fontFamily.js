const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  sans: ["Poppins", ...defaultTheme.fontFamily.sans],
  serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
};
