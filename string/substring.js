// substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
String.prototype.startsWith1 = function () {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let begin = arguments.length > 0 ? arguments[0] : 0
    let end = arguments.length > 1 ? arguments[1] : len
    begin = begin >= 0 ? Math.min(begin, len) : 0
    end = end >= 0 ? Math.min(end, len) : 0
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

/**
 * 注意问题
 * 1. 功能与slice完全一样 入参不相同  负数参数会被当做0
 */