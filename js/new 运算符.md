1. 创建一个空对象 obj
2. 把 obj 的\_\_proto\_\_指向构造函数的 prototype
3. 在当前对象上下文内执行构造函数，并改变 this 指向，指向此对象本身

```js
function People(name) {
  this.name = name;
}

People.prototype.getName() {
  return this.name;
}

var obj = {};
obj.__proto__ = People.prototype;
People.call(obj);
```
