module.exports={
    devServer:{
        host:'127.0.0.1',
        port:8080,
        proxy:{
            '/api':{
                target:'https://www.imooc.com',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }

    }
}