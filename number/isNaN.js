// Number.isNaN() 方法确定传递的值是否为 NaN和其类型是 Number。它是原始的全局isNaN()的更强大的版本。
Number.isNaN1 = function (value) {
    return typeof value === "number" && isNaN(value);
}

/**
 * 注意问题
 * 和全局函数 isNaN() 相比，该方法不会强制将参数转换成数字，只有在参数是真正的数字类型，且值为 NaN 的时候才会返回 true。
 */

 console.log(isNaN('we')) // true => 先转为数字类型 => NaN
 console.log(Number.isNaN('we')) // false => 不是数字类型