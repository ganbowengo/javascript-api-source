// Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名
//（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。

Object.getOwnPropertyNames1 = function (obj) {
    if (obj == null) {
        throw new TypeError()
    }
    let keyObj = Object.getOwnPropertyDescriptors(obj)
    return Object.keys(keyObj)
}

var arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames1(arr).sort());

/**
 * 注意
 * 1. getOwnPropertyDescriptors不支持node7.0以下
 * 2. 会返回自身除开 Symbol 外 可enumeration 和 不可 enumeration 的数组
 * 3. Object.keys 会过滤掉Symbol的属性
 */