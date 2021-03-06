
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
  },
  context: __dirname + '/app',
  mode: 'development',
  entry: {
    entry: './index.tsx',
    app: './app.js'
  },
  output: {
    path: __dirname + '/public/javascripts',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
              [
                '@babel/preset-react',
                {
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
              [
                '@babel/preset-typescript',
                {
                  allowNamespaces: true
                }
              ]

            ],
            "plugins":[
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread"             
            ]
          }
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env"
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ]
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          {
            use: ['raw-loader', 'pug-plain-loader']
          }
        ]
      },
      {
        // enforce: 'pre'を指定することによって
        // enforce: 'pre'がついていないローダーより早く処理が実行される
        // 今回はbabel-loaderで変換する前にコードを検証したいため、指定が必要
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  watchOptions: {
    poll: true
  },
  plugins: [
    // Vueを読み込めるようにするため
    new VueLoaderPlugin()
  ],
};