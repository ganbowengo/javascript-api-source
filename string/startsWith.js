// startsWith() 方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 true 或 false。
String.prototype.startsWith1 = function (search) {
    if (this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    let index = arguments.length > 1 ? arguments[1] : 0
    index = index < 0 ? 0 : index
    return O.substring(index, search.length) === search;
};

const str1 = 'Cats are the best!';

console.log(str1.startsWith1('Cats', 1));
/**
 * 注意问题
 * 1. 与endsWith相同 可以传入从起始位置 但是startsWith是从前向后的起点 、endsWith是从后向前的起点
 */