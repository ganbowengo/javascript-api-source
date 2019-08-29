// toString() 方法返回指定对象的字符串形式。
String.prototype.toString1 = function () {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    return this + ''
}