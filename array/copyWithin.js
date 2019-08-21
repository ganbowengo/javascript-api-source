// copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，会更改现有数组内容，不会改变原数组的长度。
Array.prototype.copyWithin1 = function (target, start /*, end */ ) {
    if (this === null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let length = O.length >>> 0 // 取出this的length值 并变为无符号数字
    let relativeTarget = target >> 0 // 替换目标起点位 有符号位 可为负数=> 从后向前
    let relativeStart = start >> 0 // 初始化为数字 有符号位 可为负数=> 从后向前
    let to = relativeTarget >= 0 ? Math.min(relativeTarget, length) : Math.max(relativeTarget + length, 0) //  保证在 length 与 0之间 将负数装换位正数的位置
    let from = relativeStart >= 0 ? Math.min(relativeStart, length) : Math.max(relativeStart + length, 0) //  保证在 length 与 0之间 将负数装换位正数的位置
    let end = arguments[2]
    let relativeEnd = end === undefined ? length : end >> 0
    let final = relativeEnd >= 0 ? Math.min(relativeEnd, length) : Math.max(relativeEnd + length, 0) //  保证在 length 与 0之间 将负数装换位正数的位置
    let count = Math.min(final - from, length - to) //获取替换的元素个数
    let direction = 1
    if (from < to && to < (from + count)) { // 处理to的起始位在替换位之后 从后向前替换
        direction = -1
        from += count - 1
        to += count - 1
    }
    while (count > 0) {
        if (from in O) { // 兼容this指向{}的写法
            O[to] = O[from]
        } else {
            delete O[to]
        }
        from += direction
        to += direction
        count--
    }
    return O
}

let numbers = [1, 2, 3, 4, 5];
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [1, 2, 3, 4, 5];
let numbers3 = [1, 2, 3, 4, 5];

// console.log(numbers.copyWithin1(-2))
// [1, 2, 3, 1, 2]
// console.log(numbers1.copyWithin1(0, 3))
// [4, 5, 3, 4, 5]
// console.log(numbers2.copyWithin1(0, 3, 4))
// [4, 2, 3, 4, 5]
console.log(numbers3.copyWithin1(-2, -3, -1))
// [1, 2, 3, 3, 4]
// console.log([].copyWithin1.call({len gth: 5, 3: 1}, 0, 3))
// {0: 1, 3: 1, length: 5}
// console.log([1,2,3,4,5].copyWithin1(0,-4))
// [ 2, 3, 4, 5, 5 ]

/**
 * 
 * 遇到问题
 * 1.>>> 与 >> 的区别
 *  答案: >>表示右移，如果该数为正，则高位补0，若为负数，则高位补1
 *       >>>表示无符号右移，也叫逻辑右移，即若该数为正，则高位补0，而若该数为负数，则右移后高位同样补0 忽略最高位的正负数 右移之后直接补0
 * 2.in 的用法   
 *  prop in object 会检测指定的对象与对象的原型链上的props是否存在 适用于Array与Object
 * 
 * 小知识：
 * 只存在 << 有符号左移 左移相当于 * 2^n
 * 
 * */