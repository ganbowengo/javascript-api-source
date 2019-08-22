// entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
let entries1 = function (that) {
    let _this = Object.create(that)
    this._this = _this
    _this.next = this.next().next
    _this[Symbol.iterator] = this.next()[Symbol.iterator]
    return _this
}

entries1.prototype.next = function () {
    if (this._this == null) {
        throw new TypeError('this is null or defined')
    }
    let O = Object.create(null)
    let that = Object(this._this)
    let length = that.length >>> 0
    let index = -1
    return {
        next: function () {
            index++
            return index < length ? {
                value: [index, that[index]],
                done: false
            } : {
                value: undefined,
                done: true
            }
        },
        [Symbol.iterator]: function () { //部署遍历器生成方法
            return this
        }
    }
}

Array.prototype.entries1 = function () {
    return new entries1(this)
}

let a = [1, 2, 3]
let b = a.entries1()
console.log(b)
for (let i of b) {
    console.log('object', i)
}
console.log(b.next())
console.log(b.next())
console.log(b.next())
console.log(b.next())

/**
 * 遇到问题
 * 1.iterator的实现？
 *   原生具备iterator的内置对象 Set Map Array String 函数的arguments对象 Nodelist
 * 2.通过闭包实现next的函数
 *  闭包： 函数的外部引用导致函数执行环境栈得不到释放
 * 3.创建一个Class=>function 可以设置原型链上的方法 在class中使用=>实例生成时调用
 * 4.每个iterator遍历器都有[Symbol.iterator]属性、该属性保证了for of，...的实现
 *  可直接在Symbol.iterator的属性上部署遍历器生成方法 ---> 保证for..of的使用下面的方式来部署 遍历器方法
 *  NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]
 * 
 * */