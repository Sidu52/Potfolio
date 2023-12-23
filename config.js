// const config = {
//     SERVICE_ID: "service_klnqda9",
//     TEMPLATE_ID: "template_msj603o",
//     USER_ID: "nVkQ20pC5hh9s0hvV"
// };

// export default config;
// const webpack = require('webpack');
// const dotenv = require('dotenv');

// module.exports = () => {
//     // call dotenv and it will return an Object with a parsed key
//     const env = dotenv.config().parsed;

//     // reduce it to a nice object, the same as before
//     const envKeys = Object.keys(env).reduce((prev, next) => {
//         prev[`process.env.${next}`] = JSON.stringify(env[next]);
//         return prev;
//     }, {});

//     return {
//         plugins: [
//             new webpack.DefinePlugin(envKeys)
//         ]
//     }
// }