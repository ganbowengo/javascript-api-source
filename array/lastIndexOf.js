// lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。
// 从数组的后面向前查找，从 fromIndex 处开始。
Array.prototype.lastIndexOf1 = function (target /*, fromIndex */ ) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let fromIndex = arguments.length > 1 ? arguments[1] : 0
    let k = fromIndex >= 0 ? fromIndex : Math.max(len + fromIndex, 0)
    while (len > k) {
        if (--len in O && O[len] === target) {
            return len
        }
        console.log('len', len, O[len], target)
    }
    return -1
}

console.log([1,2,3].lastIndexOf1(1,2))
/**
 * 注意 
 * 1. fromIndex 是从后向前找 到fromIndex处停止
 */