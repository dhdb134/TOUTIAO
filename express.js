// 1.导入express
const express = require('express')
const app = express()
// 2.创建web 服务器

// 4.监听客户端的GET和POST客户端请求，并向客户端响应具体的内容
app.get('/user', (req, res) => {
  const data = { data: { channels: [{ id: 0, name: '推荐' }, { id: 1, name: 'javascript' }, { id: 2, name: 'css' }, { id: 3, name: 'java' }, { id: 4, name: 'c++' }, { id: 5, name: '前端' }] } }
  //  调用express 提供的res.send() 方法，向客户端响应一JSON对象
  res.send(data)
})
app.post('/user', (req, res) => {
// 调用express 提供的res.send() 方法，向客户端响应一个文本字符串
  res.send('请求成功')
})
app.get('/', (req, res) => {
  // 通过req.query 可以获取到客户端发送过来的 查询参数
  // 注意：默认情况下，req.query是个空对象
  console.log(req.query)
  res.send(req.query)
})

app.get('/user/:id/:name', (req, res) => {
  console.log(req.params)
  res.send(req.params)
})

// 3.启动web服务器
app.listen(4000, () => {
  console.log('express sever running at http://127.0.0.1:3000')
})
