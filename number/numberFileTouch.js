/*
 * @Description: foreach touch number api file
 * @Author: your name
 * @Date: 2019-08-08 22:00:21
 * @LastEditTime: 2019-08-09 10:21:32
 * @LastEditors: Please set LastEditors
 */
let fs = require('fs')
let arr = [
    'isFinite',
    'isInteger',
    'isNaN',
    'isSafeInteger',
    'parseFloat',
    'parseInt',
    'toExponential',
    'toFixed',
    'toLocaleString',
    'toPrecision',
    'toSource',
    'toString',
    'valueOf'
]

for(let item of arr){
   fs.writeFile(item+'.js')
}