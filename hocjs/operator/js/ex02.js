
//Tự động chuyển về kiểu logic để so sánh{Truthy, falsy}

//Truthy : Các trường hợp còn lại 
//falsy: 0, NaN, null, "", undefined, false
// var a = -1;
// var b = a ? "F5" : "Bảo Trung"; // Toán Tử ba ngôi
// console.log(b);


//Cú pháp truthy: variable
//Cú pháp falsy: variable


/*
if (a) {
    //code
}
Mình hiểu a là trụthy

*/

// //Toán tử &&: hiểu đơn giản là tìm giá trị falsy còn ko thì duyệt tiếp

// var a = 1;
// var b = 2;
// var c = 3;
// var result = a && b && c;
// console.log(result);


// Toán tử || --> Tìm biểu thức đúng, còn sai thì còn chạy đến khi nào hết thì thôi
var a = false;
var b = 0;
var result = a || b || "F8";
console.log(result);