// lastIndexOf() 方法返回指定值在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。从该字符串的后面向前查找，从 fromIndex 处开始。
String.prototype.lastIndexOf1 = function (target /**,fromIndex */ ) {
    if (this == null) {
        throw new TypeError('this is null or undefined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let tLen = target.length >>> 0
    let fromIndex = arguments.length > 1 ? arguments[1] : len
    let k = fromIndex >= 0 ? fromIndex : 0
    len = fromIndex > len ? len : fromIndex
    if (tLen > len) return -1
    while (tLen < len) {
        if (O.substring(len - tLen, len) === target) {
            return len - tLen
        }
        len--
    }
    return -1
}

console.log("canal".lastIndexOf1("a"))
console.log("canal".lastIndexOf1("a", 2))
console.log("canal".lastIndexOf1("a", 0))
console.log("canal".lastIndexOf1("X"))

/**
 * 注意问题
 * 1. fromIndex参数是从后向前查找的索引
 * 
 */