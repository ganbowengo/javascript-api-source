// valueOf() 方法返回指定对象的原始值。


let a = new Boolean(false)
console.log(a.valueOf() === false) // true 同为原始值
console.log(a !== false) // true   a 是object类型 
/**
 * 
 * 注意问题
 * 1. 表示对装箱的对象拆箱操作
 * 
 */