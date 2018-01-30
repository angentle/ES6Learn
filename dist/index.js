'use strict';

// let a=1;
// console.log(a);
//=============================
// #####第2节：let\const 声明方式#####
//=============================
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

//=============================
// #####第3节：变量的解构赋值#####
//=============================
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

// const [a,b,c,d,e,f] ='angentle';
// console.log(a,b,c,d,e,f);// a n g e n t
// console.log(a); //a
// console.log(b); //n
// console.log(c); //g
// console.log(d); //e
// console.log(e); //n
// console.log(f); //t

//=============================
// #####第4节：扩展运算符和rest运算符#####
//=============================

// function angentle(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
//
// angentle(1,2,3);//1,2,3，undefined
//可以传入多个值，并且就算方法中引用多了也不会报错

// let arr1=['www','angentle','com'];
// let arr2=arr1;
// console.log(arr2);//www angentle com
// arr2.push('安吉');
// console.log(arr1);//www angentle com 安吉
// 这是我们不想看到的 我们只想改变arr2 而arr1不随着arr2改变

// 利用对象扩展运算符简单的解决这个问题
// let arr1=['www','angentle','com'];
// let arr2=[...arr1];
// console.log(arr2);//www angentle com
// arr2.push('安吉');
// console.log(arr1);//www angentle com
// console.log(arr2);//www angentle com 安吉
//简单的扩展运算符就解决了这个问题。


// rest运算符

// function angentle(fitst,...arg){
//     console.log(arg.length);
// }
// angentle(0,1,2,3,4,5,6,7);//7 (第一个值不算)

//如何循环输出rest运算符
// function angentle (first,...arg){
//     for (let val of arg){
//         console.log(val);//结果 循环遍历数组出来 1-7
//     }
// }
// angentle(0,1,2,3,4,5,6,7);

//=============================
// #####第5节：字符串模版符#####
//=============================

// let angentle='安吉';
// let blog = '很高兴学习这门课 by'+angentle+'这节课学习字符串模板';
// document.write(blog);

// let angentle='安吉';
// let blog =`<b>很高兴学习这门课 by</b>${angentle}。<br/>这节课学习字符串模板。`;
// document.write(blog);

//对运算的支持
// let a=1;
// let b=2;
// let result =`${a+b}`;
// document.write(result);

// 查找是否存在

// let angentle = '安吉';
// let blog ='很高兴学习这门课 by安吉 这节课学习字符串模板';
// document.write(blog.indexOf(angentle));//   11 安吉在该字符串中的索引值

// let angentle = '安吉';
// let blog = '很高兴学习这门课 by安吉 这节课学习字符串模板';
// // document.write(blog.includes(angentle));//  true
//
// console.log(blog.startsWith(angentle));//false
// console.log(blog.endsWith(angentle));//false

// 复制字符串
// document.write('angentle|'.repeat(3));

//=============================
// #####第6节：ES6数字操作#####
//=============================

// 二进制声明
// let binary =0B010101;
// console.log(binary); //21 ==1*2^0+1*2^2+1*2^4;

//八进制声明
// let b=0o666;
// console.log(b);//438=6*8^0+6*8^1+6*8^2

//数字判断和转换
//数字验证Number.isFinite( xx )
// let a =11/4;
// console.log(Number.isFinite(a));//ture
// console.log(Number.isFinite('angentle'));//false
// console.log(Number.isFinite(NaN));//false
// console.log(Number.isFinite(undefined));//false
// console.log(Number.isFinite(null));//false

// NaN验证
// console.log(Number.isNaN(NaN));//ture

// 判断是否为整数Number.isInteger(xx)
// let a=123.1;
// console.log(Number.isInteger(a)); //false

// 整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
// let a ='9.18';
// console.log(Number.parseInt(a));//false
// console.log(Number.parseFloat(a));//true

// 整数的操作是有一个取值范围的，它的取值范围就是2的53次方
// let a =Math.pow(2,53)-1;
// console.log(a);//9007199254740991

// 在我们计算时会经常超出这个值，所以我们要进行判断，
// ES6提供了一个常数，叫做最大安全整数，以后就不需要我们计算了。

// 最大安全整数
// console.log(Number.MAX_SAFE_INTEGER);//9007199254740991

//最小安全整数
// console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991

//安全整数判断isSafeInteger()
// let a =Math.pow(2,53)-1;
// console.log(Number.isSafeInteger(a));//true

//=============================
// #####第7节：ES6中新增的数组知识#####
//=============================

// JSON数组格式转换

// JSON的数组格式如下
// 跟普通的JSON对比是在最后多了一个length属性
// let json ={
//     '0':'angentle',
//     '1':'安吉',
//     '2':'wang',
//     length:3
// }
//
// let arr =Array.from(json);
// console.log(arr);

// Array.of()方法
// 它负责把一堆文本或者变量 转换成 数组
// let arr=Array.of(3,4,5,6);
// console.log(arr); //  [3,4,5,6]

// let arr = Array.of('angentle','安吉','wang');
// console.log(arr);

// find( )实例方法:
//必须有一个已经存在的数组，然后使用的方法
// 我们需要传入一个匿名函数，函数需要传入三个参数：
// value：表示当前查找的值。
// index：表示当前查找的数组索引。
// arr：表示当前数组

// let arr =[1,2,3,4,5,6,7,8,9];
// console.log(arr.find(function(value,index,arr){
//     return value > 5;
// }))

//=============================
// #####第8节：ES6中新增的数组知识（2）#####
//=============================

// fill( )实例方法
// let arr =[0,1,2,3,4,5,6,7,8,9];
// arr.fill('angentle',2,5);
// console.log(arr);//0,1,angentle,angentle,angentle,angentle,6,7,8,9];

// 数组的遍历
// for…of循环
// let arr =['angentle','安吉','wang'];
//  for (let item of arr){
//      console.log(item);
//  }

// for…of数组索引
// let arr =['angentle','安吉','wang'];
// for(let index of arr.keys()){
//     console.log(index);
// }

// 同时输出数组的内容和索引
// let arr =['angentle','安吉','wang'];
// for(let [index,val] of arr.entries()){
//     console.log(index+':'+val)
// }

// entries( )实例方法
// entries()实例方式生成的是Iterator形式的数组，
// 这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。
// let arr=['angentle','安吉','wang'];
// let list = arr.entries();
// console.log(list.next().value);//[0, "angentle"]
// console.log(list.next().value);//[1, "安吉"]
// console.log(list.next().value);//[2, "wang"]

//=============================
// #####第9节：ES6中的箭头函数和扩展#####
//=============================

// 先写一个ES5
// function add(a,b){
//     return a+b;
// }
// console.log(add(1,2));

// 默认值
// function add (a,b=1){
//     return a+b;
// }
// console.log(add(1));

// 主动抛出错误
// function add(a) {
//     var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
//
//     if (a == 0) {
//         throw new Error('this is error');
//     }
//     return a + b;
// }
// console.log(add(0));//this is error

// 函数中的严谨模式
// function add(a,b=1){
//     'use strict'
//     if(a==0){
//         throw new Error('this is error ');
//     }
//     return a+b;
// }
//
// console.log(add(1)); //Illegal 'use strict' directive in function with non-simple parameter list
// 上边的代码如果运行的话，你会发现浏览器控制台报错，这是ES6中的一个坑
// 错误的原因就是如果你使用了默认值，再使用严谨模式的话，就会有冲突，
// 所以我们要取消默认值，就可以正常运行了。
// function add(a, b) {
//     'use strict';
//
//     if (a == 0) {
//         throw new Error('this is error ');
//     }
//     return a + b;
// }
//
// console.log(add(1, 2));//3

// 获得需要传递的参数个数
// 如果你在使用别人的框架时，不知道别人的函数需要传递几个参数怎么办？
// ES6为我们提供了得到参数的方法(xxx.length).我们用上边的代码看一下需要传递的参数个数。
// function add(a,b,c,d){
//     'use strict'
//     if(a == 0){
//         throw new Error('this is error');
//     }
//     return a+b+c+d;
// }
// console.log(add.length);//4

// 箭头函数
// var add =(a,b=1) => a+b;
// console.log(add(6));

// 箭头函数{}的使用
// 方法体内如果是两句话，那就需要在方法体外边加上{}括号
var add = function add(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    console.log('angentle');
    return a + b;
};
console.log(add(11));
