// Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。

Object.getPrototypeOf1 = function (obj) {
    if (obj == null) {
        throw new TypeError()
    }
    let O = Object(obj)
    if (typeof O.constructor === 'function' && O instanceof O.constructor) return O.constructor.prototype
    return O instanceof Object ? Object.prototype : null
}

/**
 * 
 * 注意
 * 1. 如果没有继承属性则将返回null
 * 2. Object.getPrototypeOf(Object)  不是  Object.prototype
 * 
 * Object 是一个 ƒ Object() { [native code] } 函数
 * Object.constructor 是一个 ƒ Function() { [native code] } 函数
 * Object.getPrototypeOf(Object) 把Object 当做对象 所以会获取Object.constructor的原型 即会返回一个函数
 * 
 * 
 * Object.prototype 则是返回Object 这个函数的prototype 也就是new Object() 的原型
 * 
 *  Object.getPrototypeOf(Object) !== Object.prototype
 */