1. 使用 hashHistory，因为 url 中#符号的存在，从/#/到/#/a 浏览器并不会去发送一次 request，react-router 自己根据 url 去 render 相应的模块
2. 使用 browserHistory，浏览器从/到/a 是会向 server 发送 request 的。所以 server 端是要特殊配置的，否则页面将无法正常访问
