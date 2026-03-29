// console.log("Hoc js khong kho");
// console.log("loi");
// abc();

/*
Closure: Định nghĩa 1 hàm trong 1 phạm vi khác và có thể truy cập các biến ở phạm vi chứa nó

Trong js, tất cả các hàm đều là Closure
*/




// var y = 20;
// function dipsplay(){

//    console.log("Display");
//    var x = 10;
//    function someThing(){
      
//     console.log("someThing");
//     console.log(x);
//     console.log(y);
//    }
//    someThing();

// };

// display();


// function getMessage(){

//     console.log("getMessage");
// }

// console.log(window);

// //Cách 1 để in:
// function display(){

//    function getMessage(){

//     return "Học lập trình không khó";



//    };
//    return getMessage;

// }
// var func = display();
// console.log(func());
// //Cách 2 để in:

// function display(){

//    function getMessage(){

//     return "Học lập trình không khó";



//    };


// }

// console.log(func()());

//Lưu ý: chỉ có thể viết ở javascript 

// function sum(a, b){
// return a + b;



// }

// console.log(sum(10,20));


// function sum(a){
//    return function (b){

//     return a + b;
//    };

// }

// var add = sum(10);
// var result = sum(20);
// console.log(result);

//IIFE
// (function(){

//    console.log("hoc lap trinh khong kho");

// })();

//Giải thuật đệ quy

// function showNumber(b){
//    console.log(n);
//    if(n > 1){
//      showNumber(n - 1);
//    }
// }

// showNumber(10);

// Tính tổng 1 + 2 +3 +4 + ..... + N (Dùng đệ quy)

// function getTotal(n){
//   if( n === 1){
//      return 1;
//   }
//   return n + getTotal(n - 1);
// }

// getTotal(10);


function fibonaci(){
      if(n === 1 || n === 2){
         return 1;
      }
      return fibonaci(n - 1) + fibonaci(n - 2);
}

console.log(fibonaci(5));