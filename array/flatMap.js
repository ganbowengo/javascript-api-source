Array.prototype.flatMap1 = function (callbackFn /* ,thisArg */ ) {
    if (this === null) {
        throw new TypeError('this is null or defined')
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError('predicate must be a function')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let i = 0
    let thisArg = null
    let result = []
    if (arguments[1]) {
        thisArg = arguments[1]
    }
    let item = null
    while (i < len) {
        item = callbackFn.call(thisArg, O[i], i, O)
        if (item instanceof Array) {
            result = result.concat(item)
        } else {
            result.push(item)
        }
        i++
    }
    return result
}

let a = [1, 2, 3, 4]
console.log(a.flatMap1(item => [[item * 2]]))
console.log(a)