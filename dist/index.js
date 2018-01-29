'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// let a=1;
// console.log(a);
//
// var a ='angentle';
// console.log(a);

// var a='angentle11';
// window.onload =function(){
//     console.log(a);
// }

//compare var and let
// var a=2;
// {
//     var a=3;
// }
// console.log('a='+a) //3
//
// var b=2
// {
//     let b=3;
// }
// console.log('b='+b)//2

// {
//     let a = 3;
// }
// console.log(a);//a is no defined

//用var 声明变量循环
// for(var i=0;i<10;i++){
//     console.log('循环体中'+i); //0-9
// }
// console.log('循环体外'+i);//10 ===循环体外的i变量被污染了

//用let声明变量循环
// for (let i=0;i<10;i++){
//     console.log('循环体中'+i);//0-9
// }
// console.log('循环体外'+i);//i is no defined

// const声明常量
// const a ='angentle';//定义常量
// var a ='安吉';
// console.log(a)///无法编译 因为a重复定义了

// brfore 为变量赋值，我们只能直接指定值
// let a=0;
// let b=1;
// let c=2;

//now we can use the way
// let [a,b,c] = [1,2,3];
// console.log(a,b,c); //1 2 3

// let [a,[b,c],d] = [1,[2,3],4];
// console.log(a,b,c,d); // 1 2 3 4


//解构的默认值
// let [foo =true] =[]
// console.log(foo); //true

// let [a,b='angentle']=['安吉'];
// console.log(a,b);//安吉 angentle

// let [a,b='angentle']=['安吉',null];
// console.log(a,b);// 安吉 null 相当于null是有值的

// let [a,b='angentle']=['安吉',undefined];
// console.log(a,b);//安吉 angentle

//对象的解构赋值
// let {foo,bar} ={ foo:'angentle',bar:'安吉'};
// console.log(foo,bar);//angentle 安吉

// let foo;
// ({foo} ={foo:'angentle'});//注意外面一层有圆括号包裹
// console.log(foo); //angentle

var _angentle = 'angentle',
    _angentle2 = _slicedToArray(_angentle, 6),
    a = _angentle2[0],
    b = _angentle2[1],
    c = _angentle2[2],
    d = _angentle2[3],
    e = _angentle2[4],
    f = _angentle2[5];

console.log(a, b, c, d, e, f);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
