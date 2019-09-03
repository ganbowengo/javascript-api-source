// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 
Object.create1 = function (proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('Object prototype may only be an Object: ' + proto);
    } else if (proto === null) {
        throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
    }
    if (typeof propertiesObject != 'undefined') throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");

    function F() {}
    F.prototype = proto
    return new F()
}

/**
 * 注意问题
 * 1. 如果propertiesObject参数是 null 或非原始包装对象，则抛出一个 TypeError 异常。
 * 2. propertiesObject 是一个对象是时 会将对象中的属性浅拷贝到新创建的对象中
 */