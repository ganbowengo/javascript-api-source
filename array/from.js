// Array.from() 方法从一个类似数组或可迭代对象中创建一个新的，浅拷贝的数组实例。

Array.from1 = function (arraylink /* ,callbackFn,thisArg */ ) {
    let O = this
    let items = (function (arraylink) {
        let O = []
        if (arraylink.size > 0 && arraylink.values) { // 当前是Set
            let values = arraylink.values()
            let it = values.next()
            while (!it.done) {
                O.push(it.value)
                it = values.next()
            }
            return O
        }
        return Object(arraylink)
    }(arraylink))
    if (arraylink == null) {
        throw new TypeError('Array.from requires an array-link object - not null or defind')
    }
    let len = (function (it) {
        let max = Math.pow(2, 53) - 1
        let itLen = Number(it)
        itLen = isNaN(itLen) ? 0 : itLen
        return Math.min(itLen, max)
    })(items.length)
    let callbackFn = arguments.length > 1 ? arguments[1] : null
    let thisArg = arguments.length > 2 ? arguments[2] : null
    if (callbackFn && typeof callbackFn !== 'function') {
        throw new TypeError('Array.from the second argument must be a function')
    }
    let i = 0
    let A = typeof callbackFn !== 'function' ? new Array(len) : Object(new O(len))
    let value = null
    while (i < len) {
        value = items[i]
        if (callbackFn) {
            A[i] = callbackFn.call(thisArg, value, i)
        } else {
            A[i] = value
        }
        i++
    }
    return A
}

/**
 *  遇到问题
 *  1. 支持Set的方法
 *      values 返回一个新的iterable 对象
 *      size 返回Set中对象的个数
 *      next iterator的下一个对象
 *  2. 自执行函数
 *      函数声明不能被当做立即执行函数调用
 *          function a(){}() ==>baocuo
 *          var a = function(){}() ==> right
 *      函数表达式可以
 *      可以先将函数声明变成函数表达式后执行立即调用函数
 *          (function(){}())
 *          (function(){})()
 *          !function foo(){...}()
 *          +function foo(){...}()
 *          void function(){...}()
 *  3. 函数声明与函数表达式
 *      function a() {} 函数声明 => 当执行到函数的调用时才调用执行
 *      var a = function () {} 函数表达式 提前调用会报错 var a 会变量名提升 导致提前调用时 是undefined() TypeError
 *      
 */

console.log(Array.from([1, 2, 3], x => x + x))
console.log(Array.from1([1, 2, 3], x => x + x))