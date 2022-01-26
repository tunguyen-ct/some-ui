const presets = [
  "next/babel",
  [
    "linaria/babel",
    {
      ignore: /node_modules(?!.*some-ui)/,
    },
  ],
];

const plugins = [];

module.exports = function (api) {
  api.cache(true);
  return { presets, plugins };
};