module.exports = {
    chainWebpack(config) {
        config.module
            .rule("glsl")
            .test(/\.(glsl|frag|vert)$/) // 
            .use("raw")
            .loader("raw-loader")
            .end()
            .use("glslify")
            .loader("glslify-loader")
            .end()
            .use("glslify-import")
            .loader("glslify-import-loader")
            .end();

            config.module
            .rule("sass")
            .use("sass-loader")
            .loader("sass-loader")
            .options({ javascriptEnabled: true })
            .end();
      
      

        config.plugin("html").tap((args) => {
            args[0].title = "Boucham Amine";
            return args;
        });
    }
}
