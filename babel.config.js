// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // cible la version de Node que vous utilisez
        targets: { node: "current" },
      },
    ],
  ],
};
