// Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
Object.assign1 = function (target) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    let O = Object(target)
    for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) {
            for (let nextKey in nextSource) {
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    O[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return O
}

/**
 * 性能优化版本
 */
Object.assign2 = function (target) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    let O = Object(target)
    let args = arguments.length >>> 0
    let index = 1
    while (index < args) {
        let nextSource = arguments[index];
        index++
        if (!nextSource) continue
        let keys = Object.keys(nextSource)
        let len = keys.length >>> 0
        let i = 0
        while (i < len) {
            let key = keys[i]
            i++
            if (Object.prototype.hasOwnProperty.call(nextSource, key)) {
                O[key] = nextSource[key];
            }
        }
    }
    return O
}

console.time()
console.log(Object.assign1({
    b: 1
}, {
    a: 1
}))
console.timeEnd()

console.time()
console.log(Object.assign2({
    b: 1
}, {
    a: 1
}))
console.timeEnd()

/**
 * 注意问题
 * 1. 对象合并是最后一个向前合并 相同key值 以最后一个key的value为准
 */