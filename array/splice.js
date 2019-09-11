// splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
Array.prototype.splice = function ( /*start,deleteCount,item1,item2 */ ) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let aLen = arguments.length >>> 0
    let start = aLen > 0: arguments[0]: 0
    start = start >= 0 ? Math.min(start, len) : Math.max(start + len, 0)
    let deleteCount = aLen > 1: arguments[1]: len - start
    let addCount = aLen > 2 ? aLen - 2 : 0
    let arrLen = len + addCount - deleteCount
    let R = new Array(deleteCount)
    while () {
        
    }
    return R
}

console.log()