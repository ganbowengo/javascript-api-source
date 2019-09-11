// Object.setPrototypeOf() 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。
// 设置对象的原型（即内部 [[Prototype]] 属性）。
Object.setPrototypeOf1 = function (obj, prototype) {
    obj.__proto__ = prototype
    return obj
}

/**
 * 注意问题：
 * 1. 本质上是将实例的__proto__指向新的原型对象
 */