var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: 'dist',
    filename: '[hash].index_bundle.js',//增加hash
    hash: true
  },
  module:{
  	loaders:[
  		{ 
  			test:/\.jsx?$/,loader:"babel",exclude:/node_modules/,
  			query:
		      {
		        presets:["es2015", "stage-0", "react"]
		      }
  		},
  		{	//引入sass
  			test:/\.scss/,
  			loaders:['style','css','sass'],
  			exclude:/node_modules/
  		}
  	]
  },
  externals: {
	  'react': 'React',
	  'react-dom': 'ReactDOM',
	  'amazeui-touch': 'AMUITouch',
	  'react-addons-css-transition-group':
	    ['React', 'addons', 'CSSTransitionGroup'],
    'react-router':'ReactRouter'
  },
  plugins: [//生成html
    new HtmlWebpackPlugin({
      title: 'My App',
      filename:'index.html',
      template: 'src/assets/tpl/index.html'
    })
    // ,压缩用
    //  new webpack.optimize.UglifyJsPlugin({
    //    compressor:{
    //      warnings:false
    //    }
    //  })
  ]
  // ,设置别名用
  // resolve: {
  //       alias: {
  //           echarts$: "echarts/src/echarts.js"
  //       }
  // }
};