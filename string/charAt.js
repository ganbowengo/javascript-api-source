// charAt() 方法从一个字符串中返回指定的字符。
// index
// 一个介于0 和字符串长度减1之间的整数。 (0~length-1)
// 如果没有提供索引，charAt() 将使用0。
// 返回特定位置的字符。


String.prototype.charAt = function () {
    if (this == null) {
        throw new TypeError("this is null or defined")
    }
    let index = arguments.length > 1 ? arguments[0] : 0
    let O = Object(this)
    return O[index]
}