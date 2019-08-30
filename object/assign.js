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
}

console.log(Object.assign({b:1}, {
    a: 1
}))

/**
 * 注意问题
 * 1. 对象合并是最后一个向前合并 相同key值 以最后一个key的value为准
 */