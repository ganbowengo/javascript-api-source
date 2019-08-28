// repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。
String.prototype.repeat1 = function (count) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let str = '' + this
    count = +count
    if (count != count) {
        count = 0
    }
    if (count == null) {
        throw new TypeError('repeat requires count')
    }
    if (count < 0 || count >= Infinity) {
        throw new RangeError('repeat count must be less than infinity')
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
        return ''
    }
    let R = ''
    while (count--) {
        R += str
    }
    return R
}

console.log("abc".repeat1(NaN))
/**
 * 注意问题 
 * 1. 当参数为NaN时 默认为0
 */