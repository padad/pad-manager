module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    // devServer: {
    //     proxy: {
    //         '/api':{
    //             target:'http://jsonplaceholder.typicode.com',
    //             changeOrigin:true,
    //             pathRewrite:{
    //                 '/api':''
    //             }
    //         }
    //     }
    // }
    devServer: {
        /* 自动打开浏览器 */
        open: false,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 8066,
        https: false,
        hotOnly: false,

        proxy: {
            '/apis': {
                target: 'http://123.57.246.191',  // target host
                ws: true,  // proxy websockets 
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': '/'  // rewrite path
                }
            },
        }

        
        /* 使用代理 */
        // proxy: {
        //     '/api': {
        //         /* 目标代理服务器地址 */
        //         target: 'http://localhost:8010/',
        //         /* 允许跨域 */
        //         changeOrigin: true,
        //     },
        // },
    },
    // dev:{
    //     proxyTable: {
    //         '/api': {
    //             target: 'http://123.57.246.191',//后端接口地址
    //             changeOrigin: true,//是否允许跨越
    //             pathRewrite: {
    //                 '^/api': '/api',//重写,
    //             }
    //         }
    //       },
    // }
    
}