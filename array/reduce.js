// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
Array.prototype.reduce1 = function (callbackFn /* ,initalValue */ ) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + 'not a function')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let initalValue = arguments.length > 1 ? arguments[1] : O[0]
    if(initalValue === undefined && len === 0){
        throw new TypeError('Reduce of empty array with no inital value')
    }
    let k = len > 0 && arguments.length === 1 ? 0 : -1
    k++
    while(k < len){
        if(k in O){
            initalValue = callbackFn(initalValue, O[k], k, O)
        }
        k++
    }
    return initalValue
}

console.log([1,2,3,4].reduce((item,item1) => item + item1,5))
console.log([1,2,3,4].reduce1((item,item1) => item + item1,5))

/**
 * 
 * 注意问题 
 * 1. 只能专递两个参数
 *  回调函数 、 初始值
 * 2. 未传递第二个参数时 以数组的第一个元素为初始值 并从第二个元素开始调用回调函数
 * 
 */