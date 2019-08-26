// pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
Array.prototype.pop1 = function () {
    if(this == null){
        throw new TypeError('this is null of defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let R = O[len - 1]
    O.length = O.length && len - 1
    return R
}
let a = [1, 2, 3, 4, 5]
console.log(a.pop1())
console.log(a.pop1())
console.log(a.pop1())
console.log(a.pop1())
console.log(a.pop1())
console.log(a.pop1())