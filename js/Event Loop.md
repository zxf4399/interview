js 是单线程的，主要的任务是处理用户的交互，而用户的交互无非就是响应 DOM 的增删改，使用事件队列的形式，一次事件循环只处理一个事件响应，使得脚本执行相对连续，所以有了事件队列，用来存储待执行的事件，那么事件队列的事件从哪里被 push 进来的呢。那就是另外一个线程叫事件触发线程的事情了，他的作用主要是在定时触发器线程、异步 HTTP 请求线程满足特定条件下的回调函数 push 到事件队列中，等待 js 引擎空闲的时候去执行，当然 js 引擎执行过程中有优先级之分，首先 js 引擎在一次事件循环中，会先执行 js 线程的主任务，然后会去查找是否有微任务 microtask （promise），如果有那就优先执行微任务，如果没有，再去查找宏任务 macrotask（setTimeout，setInterval）进行执行

```js
setTimeout(() => console.log(1), 0);
Promise.resolve().then(() => console.log(2));
// 2
// 1
// 分析：Promise.then()在本轮事件循环结束之后执行，setTimeout在下一轮事件循环执行
```

```js
Promise.resolve().then(() => setTimeout(() => console.log(3), 0));
setTimeout(() => console.log(1), 0);
Promise.resolve().then(() => console.log(2));
// 2
// 1
// 3
```
