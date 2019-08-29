// trimRight() 方法从一个字符串的右端移除空白字符。
// trimEnd() / trimRight()方法移除原字符串右端的连续空白符并返回，trimEnd() / trimRight()方法并不会直接修改原字符串本身。
// 为了与 String.prototype.padEnd 等函数保持一致，标准方法名称为trimEnd。
// 但是，出于Web兼容性原因，trimRight仍然是trimEnd的别名。 在某些引擎中，这意味着：String.prototype.trimRight.name === "trimEnd";
String.prototype.trimRight1 = function () {
    return this.replace(/[\s\uFEFF\xA0]+$/g, '');
};

/**
 * 
 * 注意问题
 * 1. 返回一个新的字符串 不改变之前的字符串
 */