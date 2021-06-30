/* config-overrides.js */
// const px2rem = require("postcss-px2rem");
// const postcssNormalize = require("postcss-normalize");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.module.rules.push({
    // test: /\.css$/,
    // loader: "style-loader!css-loader!postcss-loader",

    // loader: require.resolve("postcss-loader"),
    // options: {
    //   plugins: () => [
    //     //在postcss-loader的插件中加入这个插件
    //     //px2rem({ remUnit: 75 }) 的意思就是1rem = 75px 这个是根据750px设计稿来的，如果是620 的就写 62
    //     px2rem({ remUnit: 112 }),
    //   ],
    // },
  });
  return config;
};
