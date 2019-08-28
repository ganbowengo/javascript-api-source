// includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
String.prototype.includes1 = function (search, start) {
    let O = Object(this)
    if (typeof start !== 'number') {
        start = 0
    }
    if (start + search.length > O.length) {
        return false
    } else {
        return O.indexOf(search, start) !== -1
    }
}