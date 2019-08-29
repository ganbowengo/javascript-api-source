// slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。
String.prototype.slice1 = function(){
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let begin = arguments.length > 0 ? arguments[0] : 0
    let end = arguments.length > 1 ? arguments[1] : len
    begin = begin >= 0 ? Math.min(begin, len) : Math.max(begin + len, 0)
    end = end >= 0 ? Math.min(end, len) : Math.max(end + len, 0)
    let R = ''
    let k = 0
    while (begin < end) {
        if (begin in O) {
            R += O[begin]
        }
        begin++
    }
    return R
}

console.log('1231313'.slice(1,3))

/**
 * 注意问题
 * 1. 与array的slice方法功能相同
 */