在上传文件的时候，会遇到这种场景：

1. 第一次上传 A 脚本，第二次上传 B 脚本，上传功能一切正常。
2. 第一次上传 A 脚本，第二次上传 A 脚本，onchange 事件不能触发。

解决：
input 中的 onchange 事件产生的原因：

1. 当 input 捕获到焦点后，系统存储当前值
2. 当 input 焦点离开后，判断当前值与之前存储的值是否不等，如果为 true 则触发 onchange 事件。

当上传两次相同脚本的时候，就是因为两个值相等，所以不能进行 onchange 事件的触发。
所以只需要在上传完脚本之后，将 input 中的值设置为空，就可以避免多次上传相同脚本的时候不能触发 onchange 事件。

```js
document.getElementById('uploadfile').value = null;
// 放在上传完脚本之后。
```
