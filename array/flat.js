// Array.prototype.flat1 = function (dep) {
//     if (this == null) {
//         throw new TypeError('this is null or defined')
//     }
//     let depth = dep || 1
//     let result = []
//     let expand = function (arr) {
//         if (depth === 0) {
//             return
//         }
//         let len = arr.length
//         let i = -1
//         while (++i < len) {
//             if (arr[i] instanceof Array) {
//                 depth--
//                 if (depth !== 0) {
//                     expand(arr[i])
//                 } else {
//                     result.push(arr[i])
//                 }
//             } else {
//                 result.push(arr[i])
//             }
//         }
//     }
//     expand(this)
//     return result
// }

Array.prototype.flat1 = function (dep) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let depth = dep || 1
    let result = []
    let i = -1
    let O = this
    while (O.length > 0) {
        let IT = []
        for (let i of O) {
            if (i instanceof Array) {
                if (depth !== 0) {
                    depth--
                    IT = IT.concat(i)
                } else {
                    result.push(i)
                }
            } else {
                result.push(i)
            }
        }
        O = IT
    }
    return result
}
console.log([1, 2, 3, [4, 5, 6, [1, 2, 3, [2, 3, 4]]]].flat1())