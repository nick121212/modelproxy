const tsImportPluginFactory = require("ts-import-plugin");
const { injectBabelPlugin, getLoader } = require("react-app-rewired");

module.exports = function override(config, env) {
    const cssLoader = getLoader(
        config.module.rules,
        rule => rule.test && String(rule.test) === String(/\.css$/)
    );

    const sassLoader = {
        test: /\.scss$/,
        use: [...(cssLoader.loader || cssLoader.use), "sass-loader"]
    };

    const oneOf = config.module.rules.find(rule => rule.oneOf).oneOf;
    oneOf.unshift(sassLoader);

    config = injectBabelPlugin(["import", { libraryName: "antd" }], config);

    return config;
}
