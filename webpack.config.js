module.exports = {
  mode: "development",
  entry:"./src/demo01/index.ts",
  output:{
    filename: "[name].js",
    path: __dirname+"/dist"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
      
    ]
  }
}