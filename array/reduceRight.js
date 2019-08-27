// reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
Array.prototype.reduceRight1 = function (callbackFn /* initalValue */ ) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + 'not a function')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let initalValue = arguments.length > 1 ? arguments[1] : O[len-1]
    if (initalValue === undefined && len === 0) {
        throw new TypeError('Reduce of empty array with no inital value')
    }
    let k = len > 0 && arguments.length === 1 ? len - 1 : len
    k--
    while (k >= 0) {
        if (k in O) {
            console.log(initalValue)
            initalValue = callbackFn(initalValue, O[k], k, O)
        }
        k--
    }
    return initalValue
}
const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight1(
    (accumulator, currentValue) => accumulator.concat(currentValue)
);
console.log(array1);

/**
 * 注意问题
 * 1. 与reduce的功能与参数相同 从后向前叠加
 */
[{vId: 1, aId: 1},{vId: 1, aId: 2},{vId: 2, aId: 1}].reduce((sum,current)=>{
    
},[])