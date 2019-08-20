// 数组的concat方法实现

Array.prototype.concat1 = function () {
    let arr = this.slice()
    console.log('arguments',arguments)
    for (let key in arguments) {
        if (arguments[key] instanceof Array) {
            console.log(arguments[key])
            arguments[key].forEach(element => {
                arr[arr.length] = element
            });
        } else {
            arr[arr.length] = arguments[key]
        }
    }
    return arr
}

console.log([1, 2, 3].concat1([5, 6], 1))
/**
 * 遇到问题
 * 1.arguments在forEach的时候不能遍历 
 *   答案： arguments是以0，1，2，3...为key的Object
 * 2.for in 会将数组__proto__中自己添加的方法遍历出来
 * 3.怎么设置一个原型上的函数为不可枚举
 * 
 */