// Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 
// 循环遍历该对象时返回的顺序一致 。如果对象的键-值都不可枚举，那么将返回由键组成的数组。
Object.keys = (function () {
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
            if (hasOwnProperty.call(obj, prop)) result.push(prop);
        }

        if (hasDontEnumBug) {
            for (var i = 0; i < dontEnumsLength; i++) {
                if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
            }
        }
        return result;
    }
})()

// 在js中for_in主要是用来遍历对象的可枚举属性， 包括原型链上的属性。 然而for_in在IE < 9 下可能会出现问题。
// for_in要出现问题必须满足两个条件：
// 1： IE < 9;
// 2: 某些不可枚举的属性被重写。
// 在js中当一些不可枚举的属性比如toString被重写后， 它会变成可枚举。 
// 然而当你碰上了IE < 9, 这些被重写的属性依旧是不可枚举无法使用for_in去遍历。

/**
 * 注意问题
 * 1. 返回自身可枚举类型的keys数组
 * 2. IE9以下的兼容问题 重写的不可枚举的属性在IE9以下依旧不可枚举
 * 
 */