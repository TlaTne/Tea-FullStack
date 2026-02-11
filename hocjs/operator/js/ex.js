//Biểu thức = Toán tử và toán hạng



// S = a + b + c

//S,,a, b, c --> Toán hạng
// =, + , *, - --> Toán tử

//1. Toán tử số học
/*
+, -, *, /
% --> Chia lấy dư
** --> Lũy Thừa hay hieu don gian la mu len 
++ --> Tăng lên 1 đơn vị
-- --> Giảm xuống 1 đơn vị
*/

// var a = 10;
// var b = 3;
// var c = a ** b;
// console.log(c);

// a++ và ++a, khác mặc dù có thể cùng ra kết quả

// var count = 1;
// var total = count++ + ++count + count++
//console.log(total);
/*
 giải thích nè
 khi count ++ thì count là 2 nhưng
 var total = 1 vì lấy count = 1, lấy giá trị trước
 khi ++count thì count tăng 1 giá trị lên
thì 
var total = 1 + (2 + 1)
và tương tự thì 
var total = 1 + (2+1) + (2+1) 
 =7
 */

 //2. Toán tử gán (=)
 var a = 10;
 //a = a + 10;
// a += 10;
// a -= 10;
// a *= 10;
// a /= 10;
// a %= 10;
// a **= 10;
// console.log(a);

// 3. Toán tử so sánh
/* 
>, <, >= , <=, == , === , !=, !==

==> Luôn luôn trả kiểu dữ liệu logic (boolean):
true, false

Note: 
==  So sánh bằng nhưng chỉ so sánh giá trị
=== so sánh bằng cả giá trị và kiểu dữ liệu

!= So sánh khác nhựng chỉ so sánh giá trị
!== So sánh khác cả kiểu dữ liệu và giá trị
*/

//4. Toán Tử lý luận (kết hợp)

/* 

&& --> Kết hợp and
!! --> kết hợp or
! --> kết hợp not


Thứ tự ưu tiên: Ngoặc tròn --> and --> or --> not
*/

//5. Toán tử ba ngôi
//Cú pháp: dieukien ? giatridung : giatrisai
