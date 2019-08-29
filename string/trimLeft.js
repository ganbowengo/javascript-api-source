// trimStart() 方法从字符串的开头删除空格。trimLeft()是此方法的别名。
// trimStart() / trimLeft()方法移除原字符串左端的连续空白符并返回，trimStart() / trimLeft()方法并不会直接修改原字符串本身。
// 为了与 String.prototype.padStart 等函数保持一致，标准方法名称为trimStart。 
// 但是，出于Web兼容性原因，trimLeft仍然是trimStart的别名。在某些引擎中，这意味着：String.prototype.trimLeft.name === "trimStart";
String.prototype.trimLeft1 = function () {
    return this.replace(/^[\s\uFEFF\xA0]+/g, '');
};

/**
 * 
 * 注意问题
 * 1. 返回一个新的字符串 不改变之前的字符串
 */