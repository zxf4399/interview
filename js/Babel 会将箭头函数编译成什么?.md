使用一个临时变量 _this 存储上下文的 this 给普通函数内部调用。
直接打开 [babel playground](https://www.babeljs.cn/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=FAYw9gdgzgLgBBAhgWwKZwLxwOQDMxjbCiSxz5iZwAUAlJgHxwDewc40YANqgHRdgA5tRgALAJZReSNLWABfIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=script&lineWrap=true&presets=env%2Ces2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.13.15&externalPlugins=) 试一试

```javascript
const name = 'foo'

const foo = () => {
 console.log(this.name)
}
```
compiled:

```javascript
var _this = this;

var name = 'foo';

var foo = function foo() {
  console.log(_this.name);
};
```
