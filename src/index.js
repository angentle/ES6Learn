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
for (let i=0;i<10;i++){
    console.log('循环体中'+i);//0-9
}
console.log('循环体外'+i);//i is no defined

// const声明常量
// const a ='angentle';//定义常量
// var a ='安吉';
// console.log(a)///无法编译 因为a重复定义了