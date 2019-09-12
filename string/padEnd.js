// padEnd()  方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。
String.prototype.padEnd1 = function (targetLength) {
    if (this == null) {
        throw new TypeError('this is null or undefined')
    }
    if (targetLength == null) {
        throw new TypeError('targetLength is null or undefined')
    }
    let O = String(this)
    let len = O.length >>> 0
    let padString = arguments.length > 1 ? (arguments[1] || " ") : " "
    targetLength = targetLength >> 0
    if (len > targetLength) {
        return O
    } else {
        targetLength = targetLength - len
        if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length)
        }
        return O + padString.slice(0, targetLength)
    }
}

console.log('abc'.padEnd1(6, "foo")) // abcfoo
console.log('abc'.padEnd1(4, "foo")) // abcf
console.log('abc'.padEnd1(9, "foo")) // abcfoofoo


/**
 * 注意问题
 * 1. 没有传入第二个参数时 以” “代替
 * 2. 当targetLength大与string的length时 返回原字符串
 */