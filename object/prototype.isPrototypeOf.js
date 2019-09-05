// isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。
Object.prototype.isPrototypeOf1 = function (prop) {
    if (this == null) {
        throw new TypeError()
    }
    while (prop.__proto__) {
        prop = prop.__proto__
        if (this === prop) return true
    }
    return false
}


function Foo() {}

function Bar() {}

function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf1(baz)); // true
console.log(Bar.prototype.isPrototypeOf1(baz)); // true
console.log(Foo.prototype.isPrototypeOf1(baz)); // true
console.log(Object.prototype.isPrototypeOf1(baz)); // true

/**
 * 注意问题
 * 1. 判断Object是否在参数的原型链上  Foo.prototype.isPrototypeOf(baz) Foo是否在baz的原型链上    baz 对象是否继承自 Foo.prototype
 * 
 * 原型链问题
 * 1. 每个实例的__proto__指向自己的原型对象
 * 2. 每个函数都通过prototype指向自己的原型
 * 3. 每个原型对象都通过constructor 构造函数指向函数本身
 * function F(){}
 * F.prototype === {constructor: F(){},__proto__:Object.prototype}
 * var f = new F()
 * f.prototype === undefined
 * f.__proto__ === {constructor: F(){},__proto__:Object.prototype}
 */