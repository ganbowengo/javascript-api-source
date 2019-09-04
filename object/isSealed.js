// Object.isSealed() 方法判断一个对象是否被密封。
Object.isSealed1 = function (obj) {
    if (obj == null) {
        throw new TypeError()
    }
    let O = Object(obj)
    if (!Object.getOwnPropertyNames(O).length && !Object.getOwnPropertySymbols(O).length) {
        return !Object.isExtensible(O)
    } else {
        let i = 0
        Object.getOwnPropertyDescriptors(O).map(item => {
            if (item.configurable) {
                i++
            }
        })
        return !Object.isExtensible(O) && !i
    }
}

/**
 * 注意问题
 * 是不可扩展的对象
 * 访问器属性不考虑可写不可写,只考虑是否可配置
 * 1. 不可扩展 且一级的属性的configable描述符是不可配置的 则为密封
 * 2. 不可扩展的空对象 则为密封
 */