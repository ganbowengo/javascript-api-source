// Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，
// 其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）。
// 返回给定对象自身可枚举属性的 [key, value] 数组。
Object.entries1 = function (obj) {
    if (obj == null) {
        throw new TypeError('obj is null or defined')
    }
    let keys = Object.keys(obj)
    let len = keys.length >>> 0
    let current = null
    let O = new Array(len)
    while (keys.length) {
        current = keys.shift()
        O.push([current, obj[current]])
    }
    return O
}

let a = {
    b: 1,
    c: 2
}
console.log(Object.entries1(a))