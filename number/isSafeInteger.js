// Number.isSafeInteger() 方法用来判断传入的参数值是否是一个“安全整数”（safe integer）
// 2^53 -1 and -2^53 + 1

Number.isSafeInteger1 = function (value) {
    return typeof value === 'number' && (value >= Number.MIN_SAFE_INTEGER) && (value <= Number.MAX_SAFE_INTEGER)
}

/**
 * 注意问题
 * 返回一个布尔值 表示给定的值是否是一个 --安全-- ++整数++
 */