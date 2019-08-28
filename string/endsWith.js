// endsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。
String.prototype.endsWith1 = function (search) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let index = arguments.length > 1 ? arguments[1] : len
    if (index > len) {
        index = len
    }
    return O.substring(index - search.length, index) === search;
};

const str1 = 'Cats are the best!';

console.log(str1.endsWith1('best', 17));