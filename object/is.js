// Object.is() 方法判断两个值是否是相同的值。
Object.is1 = function (obj1, obj2) {
    if (obj1 === obj2) {
        return obj1 !== 0 || 1 / obj1 === 1 / obj2
    } else {
        return obj1 !== obj1 && obj2 !== obj2
    }
}

console.log(Object.is1('foo', 'foo')); // true
console.log(Object.is1('foo', 'bar')); // false
console.log(Object.is1([], [])); // false

var foo = {
    a: 1
};
var bar = {
    a: 1
};
console.log(Object.is1(foo, foo)); // true
console.log(Object.is1(foo, bar)); // false

console.log(Object.is1(null, null)); // true

// 特例1
console.log(Object.is1(0, -0)); // false
console.log(Object.is1(0, +0)); // true
console.log(Object.is1(-0, -0)); // true
console.log(Object.is1(NaN, 0 / 0)); // true


/**
 * 
 * 注意问题  样子一样就相等 不一样就不等 
 *    两个值都是 undefined
 *    两个值都是 null
 *    两个值都是 true 或者都是 false
 *    两个值是由相同个数的字符按照相同的顺序组成的字符串
 *    两个值指向同一个对象
 *    两个值都是数字并且
 *      都是正零 +0
 *      都是负零 -0
 *      都是 NaN
 *      都是除零和 NaN 外的其它同一个数字
 */