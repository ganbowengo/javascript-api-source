// Object.prototype.propertyIsEnumerable() 方法返回一个布尔值，表示指定的属性是否可枚举。
Object.prototype.propertyIsEnumerable1 = (function () {
    // var hasOwnProperty = Object.prototype.hasOwnProperty,
    //     hasDontEnumBug = !({
    //         toString: null
    //     }).propertyIsEnumerable('toString'),
    //     dontEnums = [
    //         'toString',
    //         'toLocaleString',
    //         'valueOf',
    //         'hasOwnProperty',
    //         'isPrototypeOf',
    //         'propertyIsEnumerable',
    //         'constructor'
    //     ],
    //     dontEnumsLength = dontEnums.length;
    return function (prop) {
        if (this == null) {
            throw new TypeError()
        }
        let result = []
        for (var prop in obj) {
            if (hasOwnProperty.call(obj, prop)) result.push(prop);
        }

        // if (hasDontEnumBug) {
        //     for (var i = 0; i < dontEnumsLength; i++) {
        //         if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
        //     }
        // }
        return result.includes(prop)
    }
})()

/**
 * 注意问题
 * 1. 在原型链上propertyIsEnumerable不被考虑
 * 2. 要考虑IE9的兼容性问题
 */