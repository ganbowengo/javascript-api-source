// flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
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

// Array.prototype.flat1 = function (dep) {
//     if (this == null) {
//         throw new TypeError('this is null or defined')
//     }
//     let depth = dep || 1
//     let expand = function (arr) {
//         let len = arr.length
//         let i = -1
//         let flag = false
//         let res = []
//         depth--
//         while (++i < len) {
//             if (arr[i] instanceof Array) {
//                 if (depth >= 0) {
//                     flag = true
//                     res = res.concat(arr[i])
//                 } else {
//                     res.push(arr[i])
//                 }
//             } else {
//                 res.push(arr[i])
//             }
//         }
//         return flag ? expand(res) : res
//     }
//     return expand(this)
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
console.log([1, 2, 3, [4, 5, 6, [1, 2, 3, [2, 3, 4]]]].flat1(2))

/**
 * 遇到问题
 * 1.递归的方式实现会出现爆栈的情况
 * 2.尾递归的实现
 * 3.双层遍历的思路
 * */