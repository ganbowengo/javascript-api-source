// reverse() 方法将数组中元素的位置颠倒，并返回该数组。该方法会改变原数组
Array.prototype.reverse1 = function () {
    if(this == null){
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let k = 0
    let C = null
    len--
    while(k < len){
        C = O[k]
        O[k] = O[len]
        O[len] = C
        k++
        len--
    }
    return O
}
var sourceArray = ['one', 'two', 'three'];
var reverseArray = sourceArray.reverse1();

console.log(sourceArray) // ['three', 'two', 'one']
console.log(sourceArray === reverseArray); // true