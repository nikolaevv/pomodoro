module.exports = {
    presets: [
        [
            '@babel/env',
            {
                corejs: 3,
                useBuiltIns: "usage",
                debug: false,
                modules: false
            },
        ],
        '@babel/react',
    ],
    plugins: [
        "@babel/proposal-class-properties"
    ],
    
};
