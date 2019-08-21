// 数组的concat方法实现

//  forEach解决for in 遍历出原型链上自定义的属性
// Array.prototype.concat1 = function () {
//     let arr = this.slice()
//     console.log('arguments',arguments)
//     for (let key in arguments) {
//         if (arguments[key] instanceof Array) {
//             console.log(arguments[key])
//             arguments[key].forEach(element => {
//                 arr[arr.length] = element
//             });
//         } else {
//             arr[arr.length] = arguments[key]
//         }
//     }
//     return arr
// }

// 原型上添加方法 保证内置的原型链不受污染
const arrProto = Array.prototype
const arrMethods = Object.create(arrProto)

//  利用defineProperty来设置enumerable 属性为false 将自定义的方法设置为不可枚举
concat1 = function () {
    let arr = this.slice()
    for (let key in arguments) {
        if (arguments[key] instanceof Array) {
            for (let item in arguments[key]) {
                arr[arr.length] = arguments[key][item]
            }
        } else {
            arr[arr.length] = arguments[key]
        }
    }
    return arr
}
Object.defineProperty(arrMethods, 'concat1', {
    value: concat1,
    enumerable: false,
    writable: true,
    configurable: true
})
let a = [1, 2, 3]
// 将数组的实例的__proto__指向新建的中间层 改变原型链的指向 a -> arrMethods -> Array
a.__proto__ = arrMethods
console.log(a.concat1([5, 6], 1))
/**
 * 遇到问题
 * 1.arguments在forEach的时候不能遍历 
 *   答案： arguments是以0，1，2，3...为key的Object
 * 2.for in 会将数组__proto__中自己添加的方法遍历出来
 *   答案： for in会遍历可枚举的属性(包括自有属性和从原型链中继承的属性)
 * 3.怎么设置一个数组原型上的函数为不可枚举
 *   答案： 通过defineProperty来设置自定义添加到原型上的方法不可枚举
 */