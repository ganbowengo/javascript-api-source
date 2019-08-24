// flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 和 深度值1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
Array.prototype.flatMap1 = function (callbackFn /* ,thisArg */ ) {
    if (this === null) {
        throw new TypeError('this is null or defined')
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError('predicate must be a function')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let i = 0
    let thisArg = null
    let result = []
    if (arguments[1]) {
        thisArg = arguments[1]
    }
    let item = null
    while (i < len) {
        item = callbackFn.call(thisArg, O[i], i, O)
        if (item instanceof Array) {
            result = result.concat(item)
        } else {
            result.push(item)
        }
        i++
    }
    return result
}

let a = [1, 2, 3, 4]
console.log(a.flatMap1(item => [[item * 2]]))
console.log(a)