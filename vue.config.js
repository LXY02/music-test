module.exports = {
    lintOnSave: false,
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
