// indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。
String.prototype.indexOf1 = function (target /**,fromIndex */ ) {
    if (this == null) {
        throw new TypeError('this is null or undefined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let tLen = target.length >>> 0
    let fromIndex = arguments.length > 1 ? arguments[1] : 0
    let k = fromIndex >= 0 ? fromIndex : 0
    if (k + tLen > len) return -1
    while (k + tLen < len) {
        if (k in O && O.substring(k, k + tLen) === target) {
            return k
        }
        k++
    }
    return -1
}

console.log("Blue Whale".indexOf1("Blue"))
console.log("Blue Whale".indexOf1("", -1))
console.log("Blue Whale".indexOf1("", 9))
