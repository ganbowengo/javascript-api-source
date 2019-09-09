/**
 * 
 * author ganbowen
 * description 函数的api文件创建
 * created 2019/09/09 15:11:33
 * 
 */
let fs = require('fs')
let arr = [
   'apply',
   'bind',
   'call',
   'toString'
]

for(let item of arr){
   fs.writeFile(item+'.js')
}