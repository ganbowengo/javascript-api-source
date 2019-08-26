// includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
Array.prototype.includes1 = function (target/* ,fromIndex */){
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let fromIndex = arguments.length > 1 ? arguments[1] : 0
    if (fromIndex < 0) {
        fromIndex = Math.max(fromIndex + len, 0)
    }
    let isEqual = function (x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y))
    }
    while (fromIndex < len) {
        if (isEqual(O[fromIndex], target)) {
            return true
        }
        fromIndex++
    }
    return false
}

console.log([1, 2, 3].includes1(2))    // true
console.log([1, 2, 3].includes1(4))    // false
console.log([1, 2, 3].includes1(3, 3))  // false
console.log([1, 2, 3].includes1(3, -1)) // true
console.log([1, 2, NaN].includes1(NaN)) // true

(function() {
    console.log(Array.prototype.includes1.call(arguments, 'a')); // true
    console.log(Array.prototype.includes1.call(arguments, 'd')); // false
})('a','b','c')
/**
 * 
 * 注意问题
 * 可以判断是否包含NaN
 * 也可以通过call将this指向类数组对象调用includes
 * 
 */