/**
 * 
 * author ganbowen
 * description touch object api file
 * created 2019/08/30 10:12:45
 * 
 */
let fs = require('fs')
let arr = [
    'assign',
    'create',
    'defineProperties',
    'defineProperty',
    'entries',
    'freeze',
    'fromEntries',
    'getOwnPropertyDescriptor',
    'getOwnPropertyDescriptors',
    'getOwnPropertyNames',
    'getOwnPropertySymbols',
    'getPrototypeOf',
    'is',
    'isExtensible',
    'isFrozen',
    'isSealed',
    'keys',
    'preventExtensions',
    'prototype.hasOwnProperty',
    'prototype.isPrototypeOf',
    'prototype.propertyIsEnumerable',
    'prototype.toLocaleString',
    'prototype.toString',
    'prototype.valueOf',
    'seal',
    'setPrototypeOf',
    'values'
]

for(let item of arr){
   fs.writeFile(item+'.js')
}