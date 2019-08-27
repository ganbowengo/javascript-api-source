// keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。
Array.prototype.keys1 = function () {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let index = -1
    return {
        next: function () {
            index++
            return index < len ? {
                value: index,
                done: false
            } : {
                value: undefined,
                done: true
            }
        },
        [Symbol.iterator]: function () { //部署遍历器生成方法
            return this
        }
    }
}

let a = [1, 2, 3, 4].keys1()
for (let i of a) {
    console.log(i)
}
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
/**
 * 注意问题
 * 生成一个iterator 需要部署遍历器的生成方法[Symbol.iterator]
 */