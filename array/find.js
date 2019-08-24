// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
Array.prototype.find1 = function (callbackFn) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError('predicate must be a function')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let k = 0
    let thisArg = arguments[1]
    while (k < len) {
        if (callbackFn.call(thisArg, O[k], k, O)) {
            return O[k]
        }
    }
    return undefined
}

console.log([4, 6, 8, 12].find1(e => e > 3))