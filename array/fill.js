Array.prototype.fill1 = function (target /*,start,end */ ) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let start = (arguments[1] || 0) >> 0
    let end = (arguments[2] || len) >> 0
    let relativeStart = start > 0 ? Math.min(len, start) : Math.max(start + len, 0)
    let relativeEnd = end > 0 ? Math.min(len, end) : Math.max(end + len, 0)
    while (relativeStart < relativeEnd) {
        O[relativeStart] = target
        relativeStart++
    }
    return O
}

console.log([1, 2, 3].fill(4))
// [4, 4, 4]
console.log([1, 2, 3].fill(4, 1))
// [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2))
// [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1))
// [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3))
// [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2))
// [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN))
// [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5))
// [1, 2, 3]
console.log(Array(3).fill(4))
// [4, 4, 4]