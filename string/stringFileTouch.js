/**
 * 
 * author ganbowen
 * description touch string api file
 * created 2019/08/28 11:04:59
 * 
 */
let fs = require('fs')
let arr = [
    'fromCharCode',
    'fromCodePoint',
    'charAt',
    'charCodeAt',
    'codePointAt',
    'concat',
    'endsWith',
    'includes',
    'indexOf',
    'lastIndexOf',
    'localeCompare',
    'match',
    'matchAll',
    'normalize',
    'padEnd',
    'padStart',
    'repeat',
    'replace',
    'search',
    'slice',
    'split',
    'startsWith',
    'substring',
    'toLocaleLowerCase',
    'toLocaleUpperCase',
    'toLowerCase',
    'toString',
    'toUpperCase',
    'trim',
    'trimRight',
    'trimLeft',
    'valueOf',
    'raw'
]

for(let item of arr){
   fs.writeFile(item+'.js')
}