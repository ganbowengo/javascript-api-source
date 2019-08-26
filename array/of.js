// Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
// Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，
// 而 Array(7) 创建一个长度为7的空数组（注意：这是指一个有7个空位(empty)的数组，而不是由7个undefined组成的数组）。
Array.of1 = function(){
    let O = new Array()
    let len = arguments.length >>> 0
    let k = 0
    while(k < len){
        O[k] = arguments[k]
        k++
    }
    return O
}

/**
 * 
 * 注意问题
 * 1. 可以使用slice直接将类数组的arguments 转为数组
 *    return Array.prototype.slice.call(arguments)
 * 
 */

 console.log(Array.of1(1,2,3,4))