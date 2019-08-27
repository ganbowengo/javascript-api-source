// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
Array.prototype.fill1 = function (target /*,start,end */ ) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let start = arguments[1] >> 0
    let end = arguments[2] === undefined ? len : arguments[2] >> 0
    let relativeStart = start >= 0 ? Math.min(len, start) : Math.max(start + len, 0)
    let relativeEnd = end >= 0 ? Math.min(len, end) : Math.max(end + len, 0)
    while (relativeStart < relativeEnd) {
        O[relativeStart] = target
        relativeStart++
    }
    return O
}

console.log([1, 2, 3].fill1(4))
// [4, 4, 4]
console.log([1, 2, 3].fill1(4, 1))
// [1, 4, 4]
console.log([1, 2, 3].fill1(4, 1, 2))
// [1, 4, 3]
console.log([1, 2, 3].fill1(4, 1, 1))
// [1, 2, 3]
console.log([1, 2, 3].fill1(4, 3, 3))
// [1, 2, 3]
console.log([1, 2, 3].fill1(4, -3, -2))
// [4, 2, 3]
console.log([1, 2, 3].fill1(4, 0, 0))
// [1, 2, 3]
console.log([1, 2, 3].fill1(4, 3, 5))
// [1, 2, 3]
console.log(Array(3).fill1(4))
// [4, 4, 4]

/**
 * 注意问题
 * 1.对传入参数NaN的处理与 undefined的是不同 NaN处理为 0 undefined处理为 array.length
 * 
 */