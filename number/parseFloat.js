// Number.parseFloat() 方法可以把一个字符串解析成浮点数。该方法与全局的 parseFloat() 函数相同
Number.parseFloat1 = function (value) {
    value = Number(value)
    return value && parseFloat(value)
}

console.log(Number.parseFloat1('.123'))