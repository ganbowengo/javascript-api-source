// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
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
            return k
        }
    }
    return -1
}

console.log([4, 6, 8, 12].find1(e => e > 3))

/**
 * 与find代码一样
 * findIndex只是返回一个是索引
 * find 返回元素
 * */