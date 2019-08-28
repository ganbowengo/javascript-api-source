// Number.parseInt() 方法依据指定基数 [ 参数 radix 的值]，把字符串 [ 参数 string 的值] 解析成整数。
Number.parseInt1 = function (value) {
    value = Number(value)
    return value && parseInt(value)
}

console.log(Number.parseInt1('.123'))