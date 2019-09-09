// bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。
Function.prototype.bind1 = function (_this) {
    _this = _this || window || global
    let keys = Object.keys(arguments)

    let args = arguments[1] || []

    let fn = Symbol()
    _this[fn] = this
    let result = _this[fn](...args)
    delete _this[fn]
    return function () {
        
    }
}