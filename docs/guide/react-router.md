---
title: React-Router
lang: zh-CN
---

# React-Router

文档：[create-router](http://react-guide.github.io/react-router-cn/index.html)

#### 路由配置

路由配置是一组指令，用来告诉 router 如何匹配 URL 以及匹配后如何执行代码。我们来通过一个简单的例子解释一下如何编写路由配置。

```js
import React from 'react'
import { Router, Route, Link } from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/inbox">Inbox</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || 'Welcome to your Inbox'}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

React.render(
  <Router>
    <Route path="/" component={App}>
      {/* 当 url 为/时渲染 Dashboard */}
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>,
  document.body
)
```

通过上面的配置，这个应用知道如何渲染下面四个 URL：

| URL                 |          组件           |
| ------------------- | :---------------------: |
| / App               |      -> Dashboard       |
| /about              |      App -> About       |
| /inbox              |      App -> Inbox       |
| /inbox/messages/:id | App -> Inbox -> Message |
