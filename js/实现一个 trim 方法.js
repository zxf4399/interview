String.prototype.myTrim = function () {
  return this.replace(/^\s\s*/, '').replace(/\s\s*&/, '')
}

console.log(' test'.myTrim())
console.log('  test'.myTrim())
console.log('test '.myTrim())
console.log('test  '.myTrim())
console.log(' test '.myTrim())
console.log('  test  '.myTrim())
