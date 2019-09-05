// hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是是否有指定的键）
Object.prototype.hasOwnProperty1 = function (prop) {
    if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null)
        throw new TypeError('this is on non-object');
    let keys = Object.getOwnPropertyNames(this)
    let symbols = Object.getOwnPropertySymbols(this)
    if (keys.includes(prop) || symbols.includes(prop)) return true
    return false
}
/**
 * 注意问题
 * 1. prop可以是string 或者 Symbol 要检测的属性  字符串 名称或者 Symbol。
 * 2. 所有继承了 Object 的对象都会继承到 hasOwnProperty 方法
 */