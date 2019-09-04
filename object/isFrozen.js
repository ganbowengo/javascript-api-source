// Object.isFrozen()方法判断一个对象是否被冻结。
Object.isFrozen1 = function (obj) {
    if (obj == null) {
        throw new TypeError()
    }
    let O = Object(obj)
    if (!Object.getOwnPropertyNames(O).length && !Object.getOwnPropertySymbols(O).length) {
        return !Object.isExtensible(O)
    } else {
        let i = 0
        Object.getOwnPropertyDescriptors(O).map(item => {
            if (item.writable || item.configurable) {
                i++
            }
        })
        return !Object.isExtensible(O) && !i
    }
}

/**
 * 
 * 注意问题
 * 1. 一个对象是否冻结 与是否可写 是否可配置相关 可扩展相关
 * 2. 一个空对象 且不可扩展 则冻结
 * 3. 一个对象所有属性不可配置 不可写 自身不可扩展 则冻结
 */