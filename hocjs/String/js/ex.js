/* 
Chuỗi bao gồm các ký tự được đặt trong đầu nháy
Chuỗi là kiểu dữ liệu nguyên thủy
*/

// var a = "Học lập trình không khó";

// console.log(a);

// //Kiểm tra 1 biến có phải là kiểu chuỗi không
// //Dùng từ khóa typeof


// if(typeof a === "String"){
//     console.log("Đây là chuỗi");
// }

// //Ép kiểu dữ liệu khác về chuỗi
// var b = 10;
//  b = b + "";
//  console.log(typeof b);


/*
Các kiểu dữ liệu nguyên thủy sẽ bọc 1 đối tượng
trong đối tượng đó sẽ có các hàm xử lý chuỗi với kiểu dữ liệu tương ứng
*/

// console.log(String.prototype);

var str = "học lập trình tại F6";


//1. length: Trả về độ dài của chuỗi
// console.log(str.length);

//2. charAt(): trả về kí tự theo index(bắt đầu từ 0)
// console.log(str.charAt());
//3.charCodeAt(): tương tự như trên nhưng trả về mã ASCII
// console.log(str.charCodeAt());
// console.log("A" < "B");
//4. concat(): nối chuỗi, có thể nối chuỗi bao nhiêu cũng đc

// console.log(str.concat("A", "B"));

//5.include(): Tìm chuỗi con trong chuỗi cha
//(Tìm thấy trả về tru, ngược lại là false)

// console.log(str.includes("F8"));

//6. indexOf(): Tìm chuỗi trong chuỗi cha
//Nếu tìm thấy trả về index đầu tiên tìm được, ngược lại trả về 1/
// console.log(str.indexOf("F8"));

//7. lastIndexOf(): Tìm chuỗi trong chuỗi cha
//Nếu tìm thấy trả về index cuối cùng tìm được, ngược lại trả về 1/
// console.log(str.lastIndexOf("F8"));

//8. slile(start, end): cắt chuỗi từ index đến end

// console.log(str.slice(0, 3));

//9. replace(tukhoa, thaythe): thay thế từ khóa đầu tiên tìm được

// console.log(str.replace("F6", "F8"));

//10. replaceAll(tukhoa, thaythe): thạy the tat ca tu khoa


// console.log(str.replaceAll("F6", "F8"));

//11. split(): tách chuỗi thành mảng dựa vào ký tự phân cách

// console.log(str.split(" "));

//12. startswith: kiểm tra chuỗi bắt đầu
// var partName = "/khoa-hoc/fullstack";
// console.log(partName.startsWith("/khoa-hoc/fullstack"));

//13.endswith: kiểm tra chuỗi kết thúc

// var partName = "/khoa-hoc/fullstack.html";
// console.log(partName.endsWith(".html"));

//14. toLowerCase(): in thường

//15. toUpperCase(): in hoa

//16. trim(): loại bỏ khoảng trắng đầu và cuối chuỗi

//17. trimStart(): loại bỏ khoảng trắng đầu chuỗi


//18. trimEnd(): loại bỏ khoảng trắng cuối chuỗi

// var str = " Hoàng An:   ";

// console.log(str);
// console.log(str.trim());

// //19. match(): cắt chuỗi dựa vào biểu thức chính quy

// var content = "Xin chào mọi người, tui là tea. Số điện thoại: +8495118345";

// var pattern = /(0|\+84)d{9}/g;
// var phones = content.match(pattern);
// console.log(phones);