module.exports = {
    chainWebpack: config => {
      config
      .plugin('html')
      .tap(args => {
        //   Document title
        args[0].title = 'Robin Assistant'
        return args
      })
    },

    publicPath: process.env.NODE_ENV === '/robinassistant/'
    ? '/'
    : '/'
}