const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new StyleLintPlugin({
                files: ['src/**/*.{vue,css}'],
            }),
        ],
    },
};
