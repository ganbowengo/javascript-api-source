// bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。
Function.prototype.bind1 = function (_this) {
    if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }
    _this = Object(_this)
    _this = _this || window || global
    let fToBind = this
    let args = Array.prototype.slice.call(arguments, 1)
    let F = function () {}
    let fBind = function () {
        // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
        // 将调用时的函数的传参放入其中
        return fToBind.apply(this instanceof fBind ? this : _this, args.concat(Array.prototype.slice.call(arguments)))
    }
    if (this.prototype) {
        // 当执行Function.prototype.bind()时, this为Function.prototype 
        // this.prototype(即Function.prototype.prototype)为undefined
        F.prototype = this.prototype;
    }
    fBind.prototype = new F() // 保持function的原型链 会生成一个匿名函数 然后通过匿名函数继承Function的prototype
    return fBind
}


function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return this.x + ',' + this.y;
};

var p = new Point(1, 2);
console.log(p.toString()) // '1,2'
var emptyObj = {};
var YAxisPoint = Point.bind1(null, 0);
console.log(YAxisPoint)
var axisPoint = new YAxisPoint(5);
console.log(axisPoint)
console.log(axisPoint.toString()) // '0,5'
console.log(axisPoint instanceof Point) // true
console.log(axisPoint instanceof YAxisPoint) // true
console.log(new Point(17, 42) instanceof YAxisPoint) // true

/**
 * 
 * 注意问题
 * 1. 返回的是一个函数
 * 2. bind传入的第一个以后的参数 会以闭包的形式存在于调用bind后返回的函数中 并排列在函数调用参数之前
 * 3. 
 */