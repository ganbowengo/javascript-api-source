/*
 * @Description: foreach touch array api file
 * @Author: your name
 * @Date: 2019-08-08 22:00:21
 * @LastEditTime: 2019-08-09 10:21:32
 * @LastEditors: Please set LastEditors
 */
let fs = require('fs')
let arr = ['from',
    'isArray',
    'of',
    'concat',
    'copyWithin',
    'entries',
    'every',
    'fill',
    'filter',
    'find',
    'findIndex',
    'flat',
    'flatMap',
    'forEach',
    'includes',
    'indexOf',
    'join',
    'keys',
    'lastIndexOf',
    'map',
    'pop',
    'push',
    'reduce',
    'reduceRight',
    'reverse',
    'shift',
    'slice',
    'some',
    'sort',
    'splice',
    'toLocaleString',
    'toSource',
    'toString',
    'unshift',
    'values'
]

for(let item of arr){
   fs.writeFile(item+'.js')
}