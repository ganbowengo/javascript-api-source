// every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
Array.prototype.every1 = function (callbackFn, thisArg) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length
    let T = null
    let k = 0
    if (arguments.length > 1) {
        T = thisArg
    }
    while (k < len) {
        if (k in O) {
            if (!callbackFn.call(T, O[k], k, O)) {
                return false
            }
        }
        k++
    }
    return true
}

console.log([1,3,2,4].every(item => item >= 1))

/**
 * 注意问题
 * 1.回调函数传参是由函数自己内部决定的
 * 2.call第一位的参数要绑定的this是null || undefined时 指向window or global
 * 
 */
