module.exports={
    devServer:{
        host:'127.0.0.1',
        port:8080,
        proxy:{
            '/activity':{
                target:'https://www.imooc.com',
                changeOrigin:true,
                pathRewrite:{
                    '/activity':'/activity'
                }
            }
        }

    }
}