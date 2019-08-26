// join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
Array.prototype.join1 = function(/* separator */){
    let result = ''
    if(this == null){
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length
    if(len === 0) return ''
    let separator = arguments.length > 0 ? arguments[0] : ','
    separator = '' + separator
    let k = 0
    while(k < len - 1){
        if(k in O){
            result += O[k].toString() + separator
        }
        k++
    }
    result += O[k]
    return result
}
/**
 * 注意问题
 *  当元素内容为数字 or separator为数字时 应该处理为字符串
 */