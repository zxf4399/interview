```js
var instance = null;
class Storage {
  static getInstance() {
    return instance || new Storage();
  }
  setItem(key, value) {
    return window.localStorage.setItem(key, value);
  }
  getItem(key) {
    return window.localStorage.getItem(key);
  }
}
```
