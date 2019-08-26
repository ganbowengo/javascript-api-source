// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
Array.prototype.indexOf1 = function (target /**,fromIndex */ ) {
    if (this == null) {
        throw new TypeError('this is null or undefined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let fromIndex = arguments.length > 1 ? arguments[1] : 0
    let k = fromIndex >= 0 ? fromIndex : Math.max(len + fromIndex, 0)
    if(k > len) return -1
    while(k < len){
        if(k in O && O[k] === target){
            return k
        }
        k++
    }
    return -1
}

console.log([1,2,3,4].indexOf1(1,Infinity))
console.log([1,2,3,4].indexOf(1))
console.log([1,2,3,4].indexOf1(1))
