module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        //   Document title
        args[0].title = 'Robin Assistant'
        return args
      })
  }
}
