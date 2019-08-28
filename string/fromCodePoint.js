// String.fromCodePoint() 静态方法返回使用指定的代码点序列创建的字符串。
String.prototype.fromCodePoint1 = function () {
    let codeUnits = [],
        codeLen = 0,
        result = ""
    for (let index = 0, len = arguments.length; index !== len; ++index) {
        let codePoint = +arguments[index]
        if (!(codePoint < 0x10FFFF && (codePoint >>> 0) === codePoint))
            throw RangeError("Invalid code point: " + codePoint)
        if (codePoint <= 0xFFFF) {
            codeLen = codeUnits.push(codePoint);
        } else {
            codePoint -= 0x10000;
            codeLen = codeUnits.push(
                (codePoint >> 10) + 0xD800,
                (codePoint % 0x400) + 0xDC00
            );
        }
        if (codeLen >= 0x3fff) {
            result += String.fromCharCode.apply(null, codeUnits)
            codeUnits.length = 0;
        }
    }
    return result + String.fromCharCode.apply(null, codeUnits)
};