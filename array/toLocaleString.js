// toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，
// 这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
Array.prototype.toLocaleString1 = function ( /* locales, options */ ) {
    let result = ''
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    if (len === 0) return ''
    let separator = ','
    separator = '' + separator
    let k = 0
    let locales = arguments.length > 1 ? arguments[0] : undefined
    let options = arguments.length > 2 ? arguments[1] : undefined
    while (k < len - 1) {
        if (k in O) {
            result += O[k] ? O[k].toLocaleString(locales, options) + separator : ''
        }
        k++
    }
    result += O[k].toLocaleString(locales, options)
    return result
}

var prices = ['￥7', 500, 8123, 12]
let a = prices.toLocaleString1('ja-JP', {
    style: 'currency',
    currency: 'JPY'
})
let b = prices.toLocaleString('ja-JP', {
    style: 'currency',
    currency: 'JPY'
})
console.log('a', a)
console.log('b', b)

/**
 * 注意问题
 * 1. 数组内部都调用的是元素自己的toLocalString方法
 */