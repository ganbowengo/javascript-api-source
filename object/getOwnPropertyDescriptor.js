// Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。
// (自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）

// Object.getOwnPropertyDescriptor1 = function (obj, prop) {
//     function has(it, key) {
//         return Object.hasOwnProperty.call(it, key)
//     }
//     function createPropertyDescriptor(bitmap, value){
//         return {
//             enumerable: !(bitmap & 1),
//             configurable: !(bitmap & 2),
//             writable:  !(bitmap & 4),
//             value: value
//         }
//     }
//     if (has(obj, prop) && ) return createPropertyDescriptor(getOwnPropertyDescriptor(obj, prop),obj[prop])
// }

/**
 * 借鉴了lodash 的写法 但是觉得都只是封装了一层 没有意义
 *  
 * 注意问题： 
 * 1. 可以获取对象的每个属性的描述符
 * 2. es2015 之后会将非对象的传入值通过相应内置对象装箱成对象
 * 3. & 是将运算符两边的值按位与 都会先转为数字 2 & 3 -> 2 0010 & 0011   ===> 0010 
 * 4. | 是将运算符两边的值按位或 都会先转为数字 2 | 3 -> 3 0010 | 0011   ===> 0011  
 */