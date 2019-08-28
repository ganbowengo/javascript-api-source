// codePointAt() 方法返回 一个 Unicode 编码点值的非负整数。
// 如果在指定的位置没有元素则返回 undefined 。如果在索引处开始没有UTF-16 代理对，将直接返回在那个索引处的编码单元。
// Surrogate Pair是UTF-16中用于扩展字符而使用的编码方式，是一种采用四个字节(两个UTF-16编码)来表示一个字符，称作代理对。
String.prototype.codePointAt1 = function () {
    if (this == null) {
        throw new TypeError("this is null or defined")
    }
    let index = arguments.length > 1 ? arguments[0] : 0
    let O = Object(this)
    let len = O.length >>> 0
    index = index ? Number(index) : 0
    if (index < 0 || index > len) return undefined
    let first = O.charCodeAt(index)
    var second
    if (first >= 0xD800 && first <= 0xDBFF && len > index + 1) {// 检测当前字符UTF-16 代理对
        second = O.charCodeAt(index + 1)
        if (second >= 0xDC00 && second <= 0xDFFF) {
            return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000
        }
    }
    return first
}

console.log('\uD800\uDC00'.codePointAt1(0))
console.log('\\'.codePointAt1(0))

/**
 * 注意问题
 * 检测当前字符UTF-16 代理对
 */