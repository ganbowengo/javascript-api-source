// Array.isArray() 用于确定传递的值是否是一个 Array。
Array.isArray1 = function (target) {
    return Object.prototype.toString.call(target) === '[object Array]'
}

/**
 * 注意问题 
 * 不同于 typeof [] 返回的是 object
 * instanceof 比较的是prototype是否相同 可以伪造出数组
 * 
 */

 let a = []
 console.log(a instanceof Array)
 a.__proto__ = Number.prototype
 console.log(a instanceof Array)