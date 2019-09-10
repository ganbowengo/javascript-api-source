// toString() 方法返回一个表示当前函数源代码的字符串。

Function.prototype.toString1 = function () {
    if (typeof this !== 'function') {
        throw new TypeError()
    }
    let O = Object(this)
    return O.toString()
}

function T() {}
console.log(Function.prototype.toString1.call(T)) // 'function T(){}'
console.log(Function.prototype.toString1.call('foo')) // throw new TypeError()

/**
 * 注意问题：
 * 1. 如果 this 不是 Function 对象 抛出 // TypeError
 */