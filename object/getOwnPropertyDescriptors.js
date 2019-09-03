// Object.getOwnPropertyDescriptors() 方法用来获取一个对象的所有自身属性的描述符。
Object.getOwnPropertyDescriptors1 = function (obj) {
    if (obj == null) {
        throw new TypeError()
    }
    let keys = Object.keys(obj)
    let O = {}
    let len = keys.length >>> 0
    let k = -1
    while (++k < len) {
        O[keys[k]] = Object.getOwnPropertyDescriptor(obj, keys[k])
    }
    return O
}

console.log(Object.getOwnPropertyDescriptors1({
    a: 1,
    b: 1
}))

/**
 * 注意问题
 * 1. 只返回对象可枚举的属性的desc
 * 2. 在node7.0以下该方法不支持
 * 3. 不会过滤掉Symbol的属性
 */