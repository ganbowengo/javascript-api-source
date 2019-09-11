// Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。  
// 给对象添加多个属性并分别指定它们的配置。
Object.defineProperties = function (obj, properties) {
    function convertToDescriptor(desc) {
        function hasProperty(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        }

        function isCallable(v) {
            return typeof v === 'function';
        }
        if (typeof obj !== 'object' || obj === null)
            throw new TypeError('desc is null or dedined');
        let d = {};
        if (hasProperty(desc, 'enumerable'))
            d.enumerable = !!desc.enumerable;
        if (hasProperty(desc, 'configurable'))
            d.configurable = !!desc.configurable;
        if (hasProperty(desc, 'value'))
            d.value = desc.value;
        if (hasProperty(desc, 'writable'))
            d.writable = !!desc.writable;
        if (hasProperty(desc, 'get')) {
            var g = desc.get;

            if (!isCallable(g) && typeof g !== 'undefined')
                throw new TypeError('bad get');
            d.get = g;
        }
        if (hasProperty(desc, 'set')) {
            var s = desc.set;
            if (!isCallable(s) && typeof s !== 'undefined')
                throw new TypeError('bad set');
            d.set = s;
        }
        if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d))
            throw new TypeError('identity-confused descriptor');

        return d;
    }
    if (typeof obj !== 'object' || obj === null)
        throw new TypeError('bad obj');
    properties = Object(properties);
    let keys = Object.keys(properties);
    let descs = [];
    for (let i = 0; i < keys.length; i++)
        descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);

    for (let i = 0; i < descs.length; i++)
        Object.defineProperty(obj, descs[i][0], descs[i][1]);

    return obj;
}

/**
 * 注意问题
 * 1. set get 默认都是undefined 赋值时只能是函数
 * 2. configurable\\enumerable\\writable 是否可配置-一级优先升级 ->  是否可枚举  是否可写
 * 
 */