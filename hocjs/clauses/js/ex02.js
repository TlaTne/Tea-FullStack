//Câu lệnh switch case:
/*
-Áp dụng khi có nhiều nhánh
- Có nhiều điều kiện hoặc (||)
- Biểu thức logic là so sánh bằng (===)
*/


// var action = 'add';
// switch(action){
//     case 'add':
//     case 'create':  
//     case 'insert':  
//     console.log("Thêm");
//     break;
//     case 'update':
//     case 'edit': 
//     console.log("Cập nhật");
//     break;
//     case 'delete':
//     console.log("Xóa");
//     default:
//         console.log("Danh sách");
//         break;
// }

// if(action === "add" || action === "create" || action === "insert"){
//     console.log("Them");

// }
// else if(action === "edit" || action === "update"){
//     console.log("Cap nhat");
// }
// else if(action === "delete" || action === "remove" || action === "destroy"){
//     console.log("xoa");
// }
// else{
//     console.log("Danh sach");
// }

/*
  Viết chương trình hiển thị số ngày trong 1 tháng cho trước

input:
month = 11;
output:
tháng 11 có 31 ngày

*/
var month = 11;
if(month % 1 === 0 || month > 0 || month < 13){
switch(month){
    case 2: console.log("Thang " + month + "Co 28 ngay hoac 29 ngay");
    case 4:
    case 6:
    case 8:
    case 9:
    case 11:
        console.log("thang " + month + "Co 30 ngay.");
    default:
        console.log("thang " + month + "co 31 ngay");    

}

} else{
    console.log("Nhap sai thang");
}
