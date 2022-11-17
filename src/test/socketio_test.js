// // 引入客户端io
// import io from 'socket.io-client'

// // 连接服务器, 得到代表连接的socket对象
// // 该项目是被部署到localhost:300的端口上，所有socket也是在这个端口上
// // 得到一个链接对象
// const socket = io('ws://localhost:3000',{ cors: true })

// socket.on('receiveMsg', function (data) {
//   console.log('浏览器端接收到消息:', data)
// })

// // 向服务器发送消息
// socket.emit('sendMsg', {name: 'Tom', date: Date.now()})
