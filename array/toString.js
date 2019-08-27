// toString() 返回一个字符串，表示指定的数组及其元素。
Array.prototype.toString1 = function () {
    let result = ''
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    if (len === 0) return ''
    let separator = ','
    separator = '' + separator
    let k = 0
    while (k < len - 1) {
        if (k in O) {
            result += O[k] ? O[k].toString() + separator : ''
        }
        k++
    }
    result += O[k].toString()
    return result
}

var array1 = [1, {}, 'a', '1a'];

console.log(array1.toString1());
/**
 * 注意问题
 * 1. 每个数组的元素会调用自己最近的prototype上的toString方法
 * 
 */