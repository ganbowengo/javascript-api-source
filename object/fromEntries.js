// Object.fromEntries() 方法把键值对列表转换为一个对象。
Object.fromEntries1 = function (obj) {
    function getType() {
        return Object.prototype.toString.call(obj).slice(8, -1)
    }
    let type = getType(obj)
    let O = {}
    if (type === 'Array') {
        let len = obj.length
        let k = -1
        while (++k < len) {
            O[obj[k][0]] = obj[k][1]
        }
    }
    if (type === 'Map') {
        obj.forEach((value, key) => {
            O[key] = value
        })
    }
    return O
}

// const arr = [
//     ['0', 'a'],
//     ['1', 'b'],
//     ['2', 'c']
// ];
// const obj = Object.fromEntries1(arr);
// console.log(obj)

const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries1(map);
console.log(obj); // { foo: "bar", baz: 42 }