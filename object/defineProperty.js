// Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。 
// 给对象添加一个属性并指定该属性的配置。

Object.defineProperty1 = function (obj, prop, properties) {
    // function convertToDescriptor(desc) {
    //     function hasProperty(obj, prop) {
    //         return Object.prototype.hasOwnProperty.call(obj, prop);
    //     }

    //     function isCallable(v) {
    //         return typeof v === 'function';
    //     }
    //     if (typeof obj !== 'object' || obj === null)
    //         throw new TypeError('desc is null or dedined');
    //     let d = {
    //         enumerable: false,
    //         configurable: false,
    //         writable: false,
    //         value: null,
    //         set: undefined,
    //         get: undefined
    //     };
    //     if (hasProperty(desc, 'enumerable'))
    //         d.enumerable = !!desc.enumerable;
    //     if (hasProperty(desc, 'configurable'))
    //         d.configurable = !!desc.configurable;
    //     if (hasProperty(desc, 'value'))
    //         d.value = desc.value;
    //     if (hasProperty(desc, 'writable'))
    //         d.writable = !!desc.writable;
    //     if (hasProperty(desc, 'get')) {
    //         var g = desc.get;
    //         if (!isCallable(g) && typeof g !== 'undefined')
    //             throw new TypeError('bad get');
    //         d.get = g;
    //     }
    //     if (hasProperty(desc, 'set')) {
    //         var s = desc.set;
    //         if (!isCallable(s) && typeof s !== 'undefined')
    //             throw new TypeError('bad set');
    //         d.set = s;
    //     }
    //     if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d))
    //         throw new TypeError('identity-confused descriptor');

    //     return d;
    // }
    if (typeof obj !== 'object' || obj === null)
        throw new TypeError('bad obj');
    properties = Object(properties);
    if ('value' in properties) obj[prop] = properties.value;
    return O;
}

/**
 * 
 * 注意问题
 * 1. 默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改的。
 * 2. 
 */