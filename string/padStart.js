// padStart() 方法用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。填充从当前字符串的开始(左侧)应用的。
String.prototype.padStart1 = function (targetLength) {
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
        return padString.slice(0, targetLength) + O 
    }
}

console.log('abc'.padStart1(10, "foo"))


/**
 * 注意问题
 * 1. 没有传入第二个参数时 以” “代替
 * 2. 当targetLength大与string的length时 返回原字符串
 */