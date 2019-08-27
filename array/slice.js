// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
Array.prototype.slice1 = function ( /* begin,end */ ) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let begin = arguments.length > 0 ? arguments[0] : 0
    console.log('begin',arguments)
    let end = arguments.length > 1 ? arguments[1] : len
    begin = begin >= 0 ? Math.min(begin, len) : Math.max(begin + len, 0)
    end = end >= 0 ? Math.min(end, len) : Math.max(end + len, 0)
    let R = new Array()
    let k = 0
    console.log(begin,end)
    while (begin < end) {
        if (begin in O) {
            R[k++] = O[begin]
        }
        begin++
    }
    return R
}

let a = [1, 2, 3, 4, 5, 6, 7]
console.log(a.slice1(-1,-5))
console.log(a)