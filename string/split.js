// split() 方法使用指定的分隔符字符串将一个String对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。 
String.prototype.split1 = function ( /* separator, limit */ ) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let R = new Array()
    let O = Object(this)
    let len = O.length >>> 0
    let separator = arguments.length > 0 ? arguments[0] : undefined
    let limit = arguments.length > 1 ? arguments[1] : Infinity
    // 不传参数
    if (separator === undefined) {
        return limit ? R.push(O) : R
    }
    let k = 0
    // 空
    if (separator === '') {
        while (k < len && limit--) {
            R.push(O[k])
            k++
        }
        return R
    }
    // 正则
    if (Object.prototype.toString.call(separator) === "[object RegExp]") {
        let regres = null
        let reg = new RegExp(separator, 'g')
        while ((regres = reg.exec(this)) !== null) {
            if (regres.index === 0) {
                R.push('')
            }
            if (!regres[1]) {
                R.push('')
            } else {
                for (let i = 1; i < regres.length; i++) {
                    R.push(regres[i])
                }
                R.push('')
            }
        }
        return R
    }
    let i = -1
    // 字符串
    while (k < len) {
        if (O[k] === separator && i <= limit) {
            i++
            R[i] = ''
        } else {
            R[i] += O[k]
        }
        k++
    }
    return R
}

console.log('12341234124312'.split1(/(\w)/).length)
console.log('12341234124312'.split(/(\w)/).length)
/**
 * 
 * 注意问题
 * 1. 可以传入正则表达式 带()分组时数组会包含分组内容
 * 2. 可以传入返回的数组的长度 小于等于 0 会返回空数组
 * 
 */