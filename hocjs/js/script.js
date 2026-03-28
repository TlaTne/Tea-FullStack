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


function sum(a){
   return function (b){

    return a + b;
   };

}

var add = sum(10);
var result = sum(20);
console.log(result);