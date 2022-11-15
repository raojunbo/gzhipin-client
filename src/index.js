import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import fastclick from 'fastclick';
// react-router-dom 是web开发人员用的router
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import './test/socketio_test'

// 清除浏览器默认样式，例如浏览器默认的margin
import "normalize.css"
// 解决移动端点击延迟的问题
fastclick.attach(document.body);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

