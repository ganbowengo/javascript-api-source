// Number.isInteger() 方法用来判断给定的参数是否为整数。
Number.isInteger1 = function(value){
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value
}
console.log(Number.isInteger1(1))

/**
 * 注意问题
 * 1. 本质上调用的是全局的isFiniter函数 && value是number类型 && 取整之后与原值相同
 */
