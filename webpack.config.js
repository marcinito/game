const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    mode:'production',
    entry:{
        main:path.resolve(__dirname, 'src/index.js'),
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[contenthash].js',
        assetModuleFilename:'[name].[ext]',
        clean:true,

    },
    devtool:'inline-source-map',
    devServer:{
        static:path.resolve(__dirname,'dist'),
        port:5001,
        open:true,
        hot:true,
        liveReload:true,

    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader', 'css-loader']},
            {test:/\.(png)$/,type:'asset/resource'},
            {test:/\.js$/,
            exclude:/node_modules/,
        use:{
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env']
            }
        }}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
        title:"Space Game",
        filename:'index.html',
        template:path.resolve(__dirname, 'src/index.html'),
         }),
         new HtmlWebpackPlugin({
            title:"Game",
            filename:'index2.html',
            template:path.resolve(__dirname, 'src/index2.html'),
         })
]
}