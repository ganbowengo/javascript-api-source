// Object.preventExtensions()方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。


/**
 * 
 * 注意问题
 * 1. 使用Object.defineProperty方法为一个不可扩展的对象添加新属性会抛出异常.
 * 2. 可以继续修改已有属性
 */