// push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
Array.prototype.push1 = function () {
    if (this == null) {
        throw new TypeError('this is null of defined')
    }
    let O = Object(this)
    let k = O.length >>> 0
    let len = arguments.length >>> 0
    let i = 0
    while (i < len) {
        O[k] = arguments[i]
        i++
        k += i
    }
    return k
}

var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

console.log(Array.prototype.push1.apply(vegetables))
console.log(vegetables)