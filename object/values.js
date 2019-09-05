// Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组，
// 值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。

Object.values1 = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({
            toString: null
        }).propertyIsEnumerable('toString'),
        dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function (obj) {
        if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');

        var result = [];

        for (var prop in obj) {
            if (hasOwnProperty.call(obj, prop)) result.push(obj[prop]);
        }

        if (hasDontEnumBug) {
            for (var i = 0; i < dontEnumsLength; i++) {
                if (hasOwnProperty.call(obj, dontEnums[i])) result.push(obj[dontEnums[i]]);
            }
        }
        return result;
    }
})()

/**
 * 
 * 注意问题
 * 1. 同keys的原理相同
 * 2. 返回自身的可枚举的属性数组
 */