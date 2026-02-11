//comment trong JS

/*
 comment nhieu dong
 commnet nhieu dong
*/


//Khai báo biến
//Đặt tên theo quy tắc camel case
var user;
var customer;
var userID, username, email, userEmail;
var course = "Fullstack Course",
age = 32;
//Lưu ý: nếu 1 biến được khai báo nhưng chua gán giá trị --> giá trị mặc định là underfined

console.log(user);
console.log(course)


//hiển thị nội dung lên trình duyệt
document.writeln("<h2>Hello anh em </h2>");

//dung dom(hoc sau)
document.body.innerHTML = "Hoc js khong kho";

//Luu y: noi dung hien thi len trinh duyet co the la the html

//document.write(course)


// var welcome = "<h2> Khoa hoc"+  course+" fullStack lenin </h2>";

// welcome = welcome + "<h3> Hoang An </h3>";
// document.writeln(welcome);

//Naw 2015, js co bo sung cu phap moi de thay the dau nhay don va nhay kep
// Backtick

var welcome = `<h2> Khóa học ${course} tại F8 </h2>
<h3> </h3>`;

document.write(welcome);

//Lưu ý: Biến trong JS có 2 cách khai báo khác: let, const --> Học sau
