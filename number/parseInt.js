// Number.parseInt() 方法依据指定基数 [ 参数 radix 的值]，把字符串 [ 参数 string 的值] 解析成整数。
Number.parseInt1 = function (value, radix) {
    value = Number(value)
    return value && parseInt(value, radix)
}

console.log(Number.parseInt1('.123'))

/**
 * 注意
 * 1. 会将前面的字符串或数字以第二个参数为进制 转为 10进制数 
 * 2. 如果出现前面的字符串对应进制从第一位就出错则 返回NaN eg: '222',2 =>  NaN  Number.parseInt('4321',4) => NaN
 * 3. 从第一位之后进制表示不正确 返回出错位之前的字符串转为的十进制数  eg: '1112222',2 =>  7  Number.parseInt('1234',4) => 27
 */