// unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
Array.prototype.unshift1 = function () {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let k = arguments.length >>> 0
    let newLen = len + k
    while (newLen--) {
        if (len > 0) {
            len--
            O[newLen] = O[len]
        } else {
            k--
            O[newLen] = arguments[k]
        }
    }
    return O.length >>> 0
}

let a = [1, 2, 3, 5, 6, 79, 0, 8]

console.log(a.unshift1({1:1}))
console.log(a)

/**
 * 注意问题
 * 1. 要在原数组上修改
 */