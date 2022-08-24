module.exports = {
  plugins: {
    //
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // 配置要轉換的CSS屬性 *表示所以
      propList: ['*']
    }
  }
}
