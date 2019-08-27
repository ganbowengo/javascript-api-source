// Number.isFinite() 方法用来检测传入的参数是否是一个有穷数（finite number）。
Number.isFinite1 = function (value) {
    return typeof value === 'number' && isFinite(value)
}

console.log(Number.isFinite1(1))
/**
 * 注意问题
 * 1. 本质上调用的是全局的isFinite函数 && value是number类型
 */