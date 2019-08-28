// concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
String.prototype.concat1 = function(){
    if(this == null){
        throw new TypeError('this is null or defined')
    }
    let R = this.toString()
    for (let key in arguments) {
        R += arguments[key].toString()
    }
    return R
}

var hello = "Hello, ";
console.log(hello.concat1("Kevin", " have a nice day."));

/**
 * 注意问题
 * 1. concat会调用各自原型上的方法
 */