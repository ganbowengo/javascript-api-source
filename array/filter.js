// filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
Array.prototype.filter1 = function (callbackFn, thisArg) {
    if(this == null || typeof callbackFn !== 'function'){
        throw new TypeError()
    }
    let O = Object(this)
    let T = new Array()
    let len = O.length >>> 0
    let i = 0,c = 0
    let C = null
    if(arguments.length > 1){
        C = thisArg
    }
    while(i < len){
        if(callbackFn.call(C , O[i], i, O)){
            T[c++] = O[i]
        }
        i++
    }
    return T
}

console.log([1, 2, 3, 4, 5].filter1(item => item > 2))

/** 
 * 注意问题 
 * filter 第二个参数是第一个回调函数的 this 指向 当第一个回调函数是箭头函数的时候 this 指向window or global
*/