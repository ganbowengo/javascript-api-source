// apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。

Function.prototype.apply1 = function (_this) {
    _this = _this || window || global
    let args = arguments[1] || []
    let fn = Symbol()
    _this[fn] = this
    let result = _this[fn](...args)
    delete _this[fn]
    return result
}

var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply1(array, elements);
console.log('array', array)

/**
 * 注意：call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。
 */