// some() 方法测试是否至少有一个元素可以通过被提供的函数方法。该方法返回一个Boolean类型的值。
Array.prototype.some1 = function (callbackFn/*, thisArg */) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length
    let T = null
    let k = 0
    if (arguments.length > 1) {
        T = thisArg
    }
    while (k < len) {
        if (k in O) {
            if (callbackFn.call(T, O[k], k, O)) {
                return true
            }
        }
        k++
    }
    return false
}

/**
 * 注意问题
 * 1. 与every参数相同 不需要遍历全部的元素
 *
 */

function isBiggerThan10(element, index, array) {
    return element > 10;
}
  
let a = [2, 5, 8, 1, 4].some1(isBiggerThan10);  // false
let b =  [12, 5, 8, 1, 4].some1(isBiggerThan10); // true

console.log(a,b)