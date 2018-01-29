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


document.write('angentle|'.repeat(3));
