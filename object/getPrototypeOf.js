// Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。
// 返回指定对象的原型对象。

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
 * Object.getPrototypeOf(Object) 把Object 当做function 所以会获取Object.constructor的原型 即会返回一个函数
 * 
 * 
 * Object.prototype 则是返回Object 这个函数的prototype 也就是new Object() 的原型
 * 
 *  Object.getPrototypeOf(Object) !== Object.prototype
 */


// function C() {}

// C
// ƒ C() {}

// C.__proto__
// ƒ() {
//     [native code]
// }

// C.constructor
// ƒ Function() {
//     [native code]
// }

// C.prototype {
//     constructor: ƒ C(),
//     __proto__: Object
// }

// C.constructor.prototype
// ƒ() {
//     [native code]
// }

// C.constructor.__proto__
// ƒ() {
//     [native code]
// }

// Object.getPrototypeOf(C.constructor)
// ƒ() {
//     [native code]
// }

// Object.getPrototypeOf(C)
// ƒ() {
//     [native code]
// }

// Object 本质是一个function
Object === new Object().constructor === ƒ Object() { [native code] }
// Object 本质是一个function 函数的原型指向 一个"function"类型的对象
Object.__proto__ === Object.constructor.prototype === ƒ () { [native code] } // 本质是一个函数,constructor指向 Function(){}， Function的原型对象 指向 f(){}
// Object的原型指向顶层原型对象
Object.prototype === {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} // ===> 与Function不相同的地方
// 指向Object(){} 的构造函数
Object.constructor === ƒ Function() { [native code] } // ===> 与Function不相同的地方
// 顶级的原型节点
Object.prototype.__proto__ === null

// 实例的__proto__ 指向自己继承的原型对象
new Object().__proto__ === Object.prototype === {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} 
// new Object() 会生成一个实例的对象{} 不存在prototype属性
new Object().prototype === undefined
// {}指向构建自己的函数 Object 即构造函数
new Object().constructor === ƒ Object() { [native code] }


Function === Function.constructor === new Function().constructor === ƒ Function() { [native code] }
Function.__proto__ === Function.constructor.prototype === ƒ () { [native code] }
Function.prototype === Function.__proto__ === ƒ () { [native code]  } // 本质是一个 ‘function’ 类型的Object ！！++ 重点 **
Function.constructor === ƒ Function() { [native code] } // ===> 与Object不相同的地方
Function.prototype.__proto__ === Object.prototype === {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

new Function().__proto__ === ƒ () { [native code] } // new Function() 会生成一个匿名函数 函数的__proto__ 指向 Function.prototype
new Function().prototype === {constructor: ƒ} // new Function() 会生成一个匿名函数 函数的protype指向 自己的原对象
new Function().constructor === ƒ Function() { [native code] } // new Function() 会生成一个匿名函数 constructor指向自己