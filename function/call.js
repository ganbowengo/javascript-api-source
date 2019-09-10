// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
Function.prototype.call1 = function () {
    let _this = arguments[0] || window
    let fn = Symbol('fn')
    _this[fn] = this
    let args = Object.keys(arguments)
    let len = args.length >>> 0
    let k = 0
    args = new Array(len - 1)
    while (k < len - 1) {
        args[k] = arguments[++k]
    }
    let res = _this[fn](...args)
    delete _this[fn]
    return res
}


var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.call1(array, 1, 2, 3, 4, 5);
console.log('array', array)

/**
 * 
 * 注意：
 * 1. 该方法的语法和作用与 apply() 方法类似，只有一个区别，就是 call() 方法接受的是一个参数列表，
 * 而 apply() 方法接受的是一个包含多个参数的数组。
 */