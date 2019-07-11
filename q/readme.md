# ql js全局执行会创建了两个东西： 全局对象和this关键字

  new 的实现原理：
      1. 创建一个空对象，构造函数中的this指向这个空对象
      2. 这个新对象被执行【原型】链接
      3.执行这个构造函数，属性和方法的this引用的对象中
      4. 如果构造函数没有返回其他对象，否则，返回构造函数中的对象



q4  q4闭包的原理L:有权限 访问其他函数的作用域
     1. 阻止作用域被js垃圾回收
     2.创建私有变量
     3.创建块级作用域

in , of object.key hasOwnPertoy
// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  } 
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']


indexof 返回-1，0  ,includes 返回布尔 
reduce

Set typeof includes map redduce

