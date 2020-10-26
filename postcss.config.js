module.exports = ({ file }) => {
    let rootValue;
    if (file && file.dirname && file.dirname.indexOf('van') > -1) {
        rootValue = 37.5
    } else {
        rootValue = 37.5
    }
    return {
        plugins: [
            // require('autoprefixer')({
            //     verrideBrowserslist: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31"]
            // }),
            require('postcss-cssnext')(),
            require('postcss-pxtorem')({
                rootValue,  //根元素的font-size大小。
                unitPrecision: 6,//rem小数点最长位数。
                propList: ['*'], //需要进行转换的选择器
                propBlackList: ['border'],
                selectorBlackList: [/^html$/, /^body$/, /(node_module)/],//不进行转换的选择器 
                replace: true, //是否替换 px字段值,
                mediaQuery: false, //是否替换 媒体查下的条件
                minPixelValue: 4 // 转换的最小值
            })
        ]
    }
}
