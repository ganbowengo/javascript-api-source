// forEach() 方法对数组的每个元素执行一次提供的函数。
Array.prototype.forEach1 = function (callbackFn) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    if (typeof callbackFn != 'function') {
        throw new TypeError(callbackFn + ' is not a function')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let i = 0
    let thisArg = null
    if (arguments.length > 1) {
        thisArg = arguments[1]
    }
    while (i < len) {
        if (i in O) {
            callbackFn.call(thisArg, O[i], i, O)
        }
        i++
    }
}

/**
 * 注意问题
 * forEach不改变原数组
 * forEach不能中途break
 * forEach不返回任何东西
 * 
 * */