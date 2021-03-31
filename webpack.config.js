const path = require('path')
module.exports =  {
  mode:'development',
  entry:'./src/index.js',
  module:{
    rules:[
      {
        test:/\.(png|jpeg|gif|png)$/,
        use:{
          //loader:'file-loader',
          loader:'url-loader',
          options:{
            name:'[name].[ext]',
            outputPath:'images/',
            limit:2048,
          }
        }
      },
      {
        test:/\.scss$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{
              importLoaders:2, //当我们在打包scss文件的时候,如果scss文件引入了其他的scss，它是不会走sass-loader，postcss-loader，importLoaders的意思是也要走下面的两个loader
              modules:true, //启用css模块化
            }
          },
          'sass-loader',
          'postcss-loader'
          
        ]
      }
    ]
  },
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'disk')
  }
}