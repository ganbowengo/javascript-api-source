// match() 方法检索返回一个字符串匹配正则表达式的的结果。
// 如果正则表达式不包含 g 标志，str.match() 将返回与 RegExp.exec(). 相同的结果。

let str = 'asdfgbvcxasdfgfd'
let a = str.match(/(a)s/) // -> 将返回匹配到的数据 匹配的捕获组
// ["as", "a", index: 0, input: "asdfgbvcxasdfgfd", groups: undefined]
let b = str.match(/(a)/g) // -> 只返回匹配到的数组
// ["a", "a"]
/**
 * 注意问题 
 * 1. 不传入参数时 返回 [""]
 * 
 */