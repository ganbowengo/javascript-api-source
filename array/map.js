// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
Array.prototype.map1 = function (callbackFn /* ,thisArg */ ) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    if(typeof callbackFn !== 'function'){
        throw new TypeError('Array map requires an callback function - not null or defind')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let thisArg = arguments.length > 1 ? arguments[1] : null
    let k = 0
    let R = new Array()
    while (k < len) {
        R[k++] = callbackFn.call(thisArg, O[k], k, O)
    }
    return R
}

console.log([1,2,4,5].map(item => item * 2))
/**
 * 
 * 注意
 * 1. 返回一个新数组
 * 2. 不改变原数组
 */
