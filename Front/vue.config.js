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

        config.plugin("html").tap((args) => {
            args[0].title = "Boucham Amine";
            return args;
        });
    }
}
