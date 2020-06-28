const path = require('path');

module.exports = {
    lintOnSave: false,

    devServer: {
        open: true, // 自动打开浏览器
        port: '3001' // 端口号
    },

    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, 'src'));
    },

    css: {
        loaderOptions: {
            // 给 stylus-loader 传递选项
            stylus: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/common/stylus/color.styl` 这个文件，需要在没有vue文件中import
                import: '~@/common/style'
            }
        }
    }
};
