// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
// Change this (ESM style):
// export default {
//   plugins: [require('tailwindcss'), require('autoprefixer')],
// };

// To this (CommonJS style):
module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
};

