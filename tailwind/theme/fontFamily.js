const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  sans: ["Poppins", ...defaultTheme.fontFamily.sans],
  serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
};
