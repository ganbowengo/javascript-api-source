// 表示指定 String 对象的原始值的string串 开箱

var strObj = new String('hello world');
console.log(typeof strObj); // object

var str = strObj.valueOf();
console.log(str);           // hello world
console.log(typeof str);    // string