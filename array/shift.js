// shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
Array.prototype.shift1 = function () {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let R = O[0]
    let len = O.length >>> 0
    let = len - 2
    let k = 0
    while (k < len) {
        O[k] = O[++k]
    }
    O.length = len - 1
    return R
}

let a = [1, 2, 3, 5, 6, 79, 0, 8]

console.log(a.shift1())
console.log(a)

/**
 * 注意问题
 * 1. 要在原数组上修改
 */