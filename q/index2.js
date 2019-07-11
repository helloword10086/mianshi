let a = {
  user: '蜗牛',
  fn: function(){
     
  }
}
let a =[];
a.c='11111'
a.b='1111' 
//call()原理
Function.prototype.call = function (){
  let [thisArg, ...args] = [...arguments],
  if(!thisArg){
       thisArg = typeof window === 'undefined' ? global : window
  }
  /// this的指向是当前函数 function 
  thisArg.func = this
  //执行我们的函数
  let result = thisArg.func(...args)
  delete thisArg.func
  return result
}